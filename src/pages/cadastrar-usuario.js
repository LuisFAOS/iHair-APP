import React, { useState, useCallback, useEffect } from "react"

import cepPromise from "cep-promise"
import {Formik} from "formik"

import Head from '../components/Head'
import CheckBox from "../components/CheckBox"
import { Form, WrapperInputs } from "../components/FormComponents.style"
import FormikField from "../components/Fields/Formik"
import TextInput from "../components/Fields/Text"
import PopUp from "../components/PopUp"
import Spinner from "../components/Spinner"
import Link from "next/link"

import HandleUnAuthPage from '../utils/pagesAuthHandlers/pageUnAuth.handler'
import { baseURL } from "../utils/baseURL"

import {
    Container,
    InputSide,
    BackPageButton,
    BackPageIcon,
    BackgroundCircle,
    FormTitle,
    FormBox,
    PresentationSide,
    SignUpButton,
    ButtonBox,
    KnowMoreButton,
    CheckBoxContainer,
} from '../styles/cadastrar-usuario.style'

import validations from "../schemas/normalUser.schema"

import { useHTTP } from '../hooks'

function SignUpNormalUser(){

    const [isErrorsVisible, setErrorsVisibility] = useState(false)
    const [popUpProps, setPopUpProps] = useState(null)
    const [isTermsAccept, setIsTermsAccept] = useState(false)
    const [CEP, setCEP] = useState({
        value: '',
        error: ''
    })

    const [isLoading, error, sendRequest] = useHTTP()

    const { message, status, amount } = error
    useEffect(() => {
        if(message && amount > 0) setPopUpProps({type: 'warning', message})
    }, [amount])
    
    const handleSubmit = async (values, isValid) => {
        await handleCEPvalidator()
        if(!isValid || (!!CEP.error && CEP.value.length == 7)){
            setErrorsVisibility(true)            
        }else if(!isTermsAccept){
            setErrorsVisibility(true)
            setPopUpProps({
                type: 'warning',
                message: 'Você tem que aceitar todos os termos para continuar.'
            })        
        }else{
            await sendRequest({entity: 'normal-user', body: {...values, CEP: CEP.value}}, 
                (data) => setPopUpProps({
                    type: 'done',
                    message: 'Cadastrado com sucesso! Agora basta confirmar seu email'
            }))
        }   
    }

    const handleCEPvalidator = useCallback(async () => {
        try {
            await cepPromise(CEP.value)
            setCEP((prevCEPstate) => {
                return {...prevCEPstate, error: ''}
            })
        } catch (error) {
            setCEP((prevCEPstate) => {
                return {...prevCEPstate, error: 'CEP inválido.'}
            })
        }
    }, [CEP.value])


    return (
        <Container>
            <Head title="iHair | cadastrar-usuário"/>
            <BackPageButton>
                <BackPageIcon/>
                    <Link href="/login">
                        Login
                    </Link>
                </BackPageButton>
            <BackgroundCircle/>
           {
                popUpProps &&
                <PopUp
                    setMyProps={setPopUpProps}
                    type={popUpProps.type}
                    message={popUpProps.message}   
                />
            }
            <PresentationSide>
                <figure id="logo">
                    <img src="/logo.png"/>
                </figure>
                <h1 id="presentation-title">
                        Olá! Bem Vindo!
                </h1>
                <p id="presentation-description">
                    Se voce está aqui é porque, provavelmente, esteja interessado em utilizar
                    nosso site! Caso queira cadastrar seu salão, clique no botão abaixo.                
                </p>
                <Link href="/">
                    <KnowMoreButton>
                        SAIBA MAIS
                    </KnowMoreButton>
                </Link>
            </PresentationSide>
            <InputSide>
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
                        }) => (
                            <Form>
                                <WrapperInputs>
                                    <div className="input-content-box">
                                        <FormikField 
                                            name="email" 
                                            inputValue={values.email}
                                            ErrorMessage={errors.email}
                                            isErrorsVisible={isErrorsVisible}
                                            labelText="Email"/>
                                    </div>
                                    <div className="input-content-box">
                                        <FormikField 
                                            name="password" 
                                            inputValue={values.password}
                                            ErrorMessage={errors.password}
                                            isErrorsVisible={isErrorsVisible}
                                            labelText="Senha"
                                            isPasswordInput/>
                                    </div>
                                </WrapperInputs>
                                <WrapperInputs>
                                    <div className="input-content-box">
                                        <FormikField   
                                            name="name" 
                                            inputValue={values.name}
                                            ErrorMessage={errors.name}
                                            isErrorsVisible={isErrorsVisible}
                                            labelText="Nome"/>
                                    </div>
                                    <div className="input-content-box">
                                        <TextInput 
                                            name="CEP" 
                                            inputValue={CEP.value}
                                            ErrorMessage={CEP.error}
                                            blured={() => {
                                                const CEPvalueTrimmedLength = CEP.value.trim().length
                                                if(CEPvalueTrimmedLength > 7 && CEPvalueTrimmedLength < 10) handleCEPvalidator()
                                                else {
                                                    setCEP((prevCEPstate) => {
                                                        return {...prevCEPstate, error: 'CEP inválido.'}
                                                    })
                                                }
                                            }}
                                            changed={value => setCEP({value, error: ''})}
                                            isErrorsVisible={isErrorsVisible}
                                            labelText="CEP"/>
                                    </div>
                                </WrapperInputs>
                                <CheckBoxContainer>
                                    <CheckBox
                                        clicked={() => setIsTermsAccept(!isTermsAccept)}
                                        value={isTermsAccept}
                                        labelText="Aceito todos os termos."
                                    />
                                </CheckBoxContainer>
                                <ButtonBox>
                                    <SignUpButton 
                                        onClick={() => handleSubmit(values, isValid)}
                                        type="button">
                                        {isLoading ? <Spinner size="small"/> : "Cadastrar"}
                                    </SignUpButton>
                                </ButtonBox>
                            </Form>
                        )}
                    </Formik>
                    <BackgroundCircle 
                        isStaticSize/>
                </FormBox>
            </InputSide>
        </Container>
    )
}


export async function getServerSideProps(ctx){
    const possibleRedirect = HandleUnAuthPage(ctx)

    if(possibleRedirect) return possibleRedirect

    return {props:{}}
}

export default SignUpNormalUser
