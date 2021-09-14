import React, { useState, useEffect } from 'react'

import { useHTTP } from '../../hooks'

import cepPromise from 'cep-promise'

import Link from 'next/link'
import PopUp from '../../components/PopUp'
import Head from '../../components/Head'
import FormikField from '../../components/Fields/Formik'
import TextInput from '../../components/Fields/Text'
import Spinner from '../../components/Spinner'
import {
    Container,
    FormBox,
    Title,
    UpdateButton,
    Form,
    ButtonBox,
    LinkBox
} from '../../styles/editar-dados.style'

import validations from '../../schemas/normalUser.schema'
import { Formik } from 'formik'
import { parseCookies } from 'nookies'

import { baseURL } from '../../utils/baseURL'
import fetcher from '../../utils/fetcher'
import HandleAuthPage from '../../utils/pagesAuthHandlers/pageAuth.handler'

import useSWR from 'swr'

function EditUserData(props) {

    const [isLoading, sendRequest] = useHTTP()

    const [CEP, setCEP] = useState({
        value: props.user.CEP,
        error: '',
    })
    const [user, setUser] = useState({
        name: props.user.name,
        email: props.user.email,
    })
    
    const [isShowingErrors, setErrorsVisibility] = useState(false)
    const [popUpProps, setPopUpProps] = useState(null)    

    const CEPValidationHandler = async () => {
        try {
            await cepPromise(CEP.value)
        } catch (error) {
            setCEP({...CEP, error: 'CEP inválido!'})
        }
    }

    const handleSubmit= async (updatedNameAndEmail) => {   
        if(CEP.value !== props.user.CEP) await CEPValidationHandler()

        const {'auth.token': authToken} = parseCookies()
        const updatedUser = {...updatedNameAndEmail, CEP: CEP.value}

        await sendRequest({
            entity:'normal-user',
            body: updatedUser,
            method: 'PATCH',
            headers: {authorization: authToken, 'Content-Type': 'application/json'}
        }, () => setPopUpProps({type: 'success', message: 'Dados atualizados com sucesso!'}), setPopUpProps)
    }      

    const handleConfirmationPopUp = values => {
        console.log('A confirmar')    
    
        setPopUpProps({
            type: 'question', 
            message: 'Tem certeza que deseja atualizar seus dados?', 
            funcAfterConfirmation: () => handleSubmit({name: values.name, email: values.email})
        })
    } 


    return (
        <>
            <Head title="iHair | perfil-editar"/>
            <Container>
                {
                    popUpProps && (
                        <PopUp 
                            type={popUpProps.type} 
                            message={popUpProps.message} 
                            setPopUpProps={setPopUpProps}
                            funcAfterConfirmation={popUpProps.funcAfterConfirmation}/>
                )}
                <FormBox>
                    <Title>Edite seus dados</Title>
                    <Formik 
                        initialValues={{name: user.name, email: user.email, password: '*********'}}  
                        validationSchema={validations}
                        onSubmit={handleSubmit}
                        validateOnMount>
                        {({
                            values,
                            errors,
                            touched,
                            isValid
                        }) => (
                            <Form>
                                <FormikField 
                                    name="name" 
                                    inputValue={values.name}
                                    ErrorMessage={errors.name}
                                    isShowingErrors={isShowingErrors}
                                    labelText="Nome"/>
                                <FormikField 
                                    name="email" 
                                    inputValue={values.email}
                                    ErrorMessage={errors.email}
                                    isShowingErrors={isShowingErrors}
                                    labelText="Email"/>
                                <TextInput 
                                    name="CEP" 
                                    inputValue={CEP.value ? CEP.value : props.user.CEP}
                                    ErrorMessage={CEP.error}
                                    changed={value => setCEP({...CEP, value})}
                                    blured={CEPValidationHandler}
                                    isShowingErrors={isShowingErrors}
                                    labelText="CEP"/>
                                <LinkBox>
                                    <Link href="usuario/nova-senha">Trocar senha</Link>
                                </LinkBox>
                                <ButtonBox>
                                    <UpdateButton onClick={() => handleConfirmationPopUp(values)} type="submit">
                                        {isLoading ? <Spinner size="small" color="#dc3545"/>: 'Atualizar'}
                                    </UpdateButton>
                                </ButtonBox>
                            </Form>
                        )}
                    </Formik>
                </FormBox>
            </Container>     
        </>)
}


async function getMainUserData(ctx){
    const {'auth.token': authToken} = parseCookies(ctx)
        
    const response = await fetch(`${baseURL}/normal-user`, {
        method: 'GET',
        headers: {authorization: authToken},
    })

    let [data, errorMessage] = ['','']

    const {status: responseStatus} = response

    if(responseStatus >= 400 && responseStatus <= 499) errorMessage = await response.text()
    else if(responseStatus === 500) throw new Error('Erro interno')    
    else data = await response.json()
    
    return {
        user: {
            name: data.user.name, 
            email: data.user.email, 
            CEP: data.user.CEP
        }, 
        errorMessage
    }
}


export async function getServerSideProps(ctx){
    const possibleRedirect = HandleAuthPage(ctx, 'normalUser')

    if(possibleRedirect) return possibleRedirect

    const {user, errorMessage} = await getMainUserData(ctx)

    return {
        props: {
            user, 
            errorMessage
        }
    }
}

export default EditUserData
