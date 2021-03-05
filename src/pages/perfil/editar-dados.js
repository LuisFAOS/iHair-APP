import React, { useState } from 'react'

import WithAuth from '../../HOCs/WithAuth'

import cepPromise from 'cep-promise'

import FormikField from '../../components/FormikField'
import TextInput from '../../components/TextInput'
import Loading from '../../components/Loading'
import {
    Container,
    FormBox,
    Title,
    UpdateButton,
    Form,
    ButtonBox,
} from '../../styles/editar-dados.style'

import validations from '../../schemas/normalUser.schema'
import { Formik } from 'formik'
import { baseURL } from '../../utils/baseURL'
import fetcher from '../../utils/fetcher'
import useSWR from 'swr'

function EditUserDatas(props) {

    const { data, error } = useSWR(`${baseURL}/normal-user/listDatas`, fetcher)

    const [CEP, setCEP] = useState({
        value: '',
        error: '',
    })

    const [showErrors, setShowErrors] = useState(false)

    const CEPValidationHandler = async () => {
        try {
            await cepPromise(CEP)
        } catch (error) {
            setCEP({...CEP, error: 'CEP inválido!'})
        }
    }

    const handleSubmit= async () => {
        try{
            const response = await fetch(`${baseURL}/normal-user`,{
                method: 'PATCH',
                body: JSON.stringify({})
            })
        }catch(error){

            setShowErrors(true)
        }
    }


    return (
        <Container>
            {!data ? (<Loading size="large"/>) : (
                <FormBox>
                    <Title>Edite seus dados</Title>
                    <Formik 
                        initialValues={{name: data.userDatasFromDB.name, email: data.userDatasFromDB.email, password: '*********'}}  
                        validationSchema={validations}
                        onSubmit={() => {}}
                        validateOnMount>
                        {({
                            values,
                            errors,
                            touched,
                            isValid
                            /* and other goodies */
                        }) => (
                            <Form>
                                <FormikField 
                                    name="name" 
                                    inputValue={values.name}
                                    ErrorMessage={errors.name}
                                    showErrors={showErrors}
                                    labelText="Nome"/>
                                <FormikField 
                                    name="email" 
                                    inputValue={values.email}
                                    ErrorMessage={errors.email}
                                    showErrors={showErrors}
                                    labelText="Email"/>
                                <TextInput 
                                    name="CEP" 
                                    inputValue={CEP.value ? CEP.value : data.userDatasFromDB.CEP}
                                    ErrorMessage={CEP.error}
                                    changed={value => setCEP({...CEP, value})}
                                    blured={CEPValidationHandler}
                                    showErrors={showErrors}
                                    labelText="CEP"/>
                                <ButtonBox>
                                    <UpdateButton type="submit">
                                        Atualizar
                                    </UpdateButton>
                                </ButtonBox>
                            </Form>
                        )}
                    </Formik>
                </FormBox>
            )}
        </Container>
    )
}

export default WithAuth(EditUserDatas)
