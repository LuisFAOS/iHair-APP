import React, { useState } from "react"

import cepPromise from "cep-promise"
import {Formik} from "formik"

import CheckBox from "../components/CheckBox"
import { Form, Wrapper } from "../components/FormComponents.style"
import FormikField from "../components/FormikField"
import TextInput from "../components/TextInput"
import PopUp from "../components/PopUp"
import Loading from "../components/Loading"

import WithUnAuth from '../HOCs/WithUnAuth'

import {
    Container,
    InputSide,
    BackPageButton,
    FormTitle,
    FormBox,
    ApresentationSide,
    SignUpButton,
    ButtonBox,
    KnowMoreButton,
    CheckBoxContainer,
} from '../styles/cadastrar-usuario.style'

import validations from "../schemas/normalUser.schema"
import { baseURL } from "../utils/baseURL"
import Link from "next/link"

function SignUpNormalUser(){

    const [showErrors, setShowErrors] = useState(null)
    const [popUpDatas, setPopUpDatas] = useState(null)
    const [isTermsAccept, setIsTermsAccept] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [CEP, setCEP] = useState({
        value: '',
        error: 'CEP inválido.'
    })

    const handleSubmit = async (values, isValid) => {
        setLoading(true)
        
        try {
            if(!isValid || (!!CEP.error && CEP.value.length == 7)){
                setShowErrors(true)
                return
            }else if(!isTermsAccept){
                setShowErrors(true)
                setPopUpDatas({
                    iconName: 'warningIcon',
                    message: 'Você tem que aceitar todos os termos para continuar.'
                })
                return
            }

            const postUserResponse = await fetch(`${baseURL}/normal-user`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({
                    ...values,
                    CEP: CEP.value
                })
            })

            if(postUserResponse.status >= 400 && postUserResponse.status <= 499){
                const error = await postUserResponse.text()
                setPopUpDatas({
                    iconName: 'warningIcon',
                    message: error
                })
            }else{
                setPopUpDatas({
                    iconName: 'doneIcon',
                    message: 'Cadastrado com sucesso, agora vá até seu email e confirme-o.'
                })
            }
        } catch (internalError) {
            console.error(internalError)
            setPopUpDatas({
                iconName: 'warningIcon',
                message: 'Erro interno. Por favor, aguarde.'
            })
        }
        setLoading(false)
    }

    const handleCEPvalidator = async () => {
        try {
            await cepPromise(CEP.value)
        } catch (error) {
            setCEP({...CEP, error: 'CEP inválido.'})
        }
    }


    return (
        <Container>
            {
                popUpDatas &&
                <PopUp
                    setPopUpDatas={setPopUpDatas}
                    iconName={popUpDatas.iconName}
                    message={popUpDatas.message}   
                />
            }
            <ApresentationSide>
                <div id="logo">
                    <img src="/logo.png"/>
                </div>
                <div id="apresentation-title">
                    Olá, Bem Vindo!
                </div>
                <div id="apresentation-description">
                    Se voce está aqui é porque, provavelmente, esteja interessado em utilizar
                    nosso site! Caso queira cadastrar seu salão, clique no botão abaixo.                
                </div>
                <Link href="/beneficios">
                    <KnowMoreButton>
                        SAIBA MAIS
                    </KnowMoreButton>
                </Link>
            </ApresentationSide>
            <InputSide>
                <BackPageButton/>

                <FormBox>
                    <FormTitle>
                        Crie sua conta
                    </FormTitle>
                    <Formik 
                        initialValues={{email: '', name: '', CEP: '', password: ''}}  
                        validationSchema={validations}
                        validateOnMount>
                        {({
                            values,
                            errors,
                            touched,
                            isValid
                            /* and other goodies */
                        }) => (
                            <Form>
                                <Wrapper>
                                    <div className="form-group">
                                        <FormikField 
                                            name="email" 
                                            inputValue={values.email}
                                            ErrorMessage={errors.email}
                                            showErrors={showErrors}
                                            labelText="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <FormikField 
                                            name="password" 
                                            inputValue={values.password}
                                            ErrorMessage={errors.password}
                                            showErrors={showErrors}
                                            labelText="Senha"
                                            isPassword/>
                                    </div>
                                </Wrapper>
                                <Wrapper>
                                    <div className="form-group">
                                        <FormikField   
                                            name="name" 
                                            inputValue={values.name}
                                            ErrorMessage={errors.name}
                                            showErrors={showErrors}
                                            labelText="Nome"/>
                                    </div>
                                    <div className="form-group">
                                        <TextInput 
                                            name="CEP" 
                                            inputValue={CEP.value}
                                            ErrorMessage={CEP.error}
                                            blured={handleCEPvalidator}
                                            changed={value => setCEP({value, error: ''})}
                                            showErrors={showErrors}
                                            labelText="CEP"/>
                                    </div>
                                </Wrapper>
                                <CheckBoxContainer>
                                    <CheckBox
                                        changed={setIsTermsAccept}
                                        value={isTermsAccept}
                                        labelText="Aceito todos os termos."
                                    />
                                </CheckBoxContainer>
                                <ButtonBox>
                                    <SignUpButton 
                                        onClick={() => handleSubmit(values, isValid)}
                                        type="button">
                                        {isLoading ? <Loading size="small"/> : "Cadastrar"}
                                    </SignUpButton>
                                </ButtonBox>
                            </Form>
                        )}
                    </Formik>
                </FormBox>
            </InputSide>
        </Container>
    )
}


export default WithUnAuth(SignUpNormalUser)