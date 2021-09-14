import React, { useState } from 'react'
import TextInput from '../components/Fields/Text'

import Head from '../components/Head'

import {
    Container,
    FormBox,
    Title,
    SendEmailButton,
    Circle
} from '../styles/esqueci-senha.style'

import HandlePageUnAuth from '../utils/pagesAuthHandlers/pageUnAuth.handler'
import WithAuth from '../HOCs/WithAuth'

function ForgotPassword(){

    const [email, setEmail] = useState('')
    const [emailCode, setEmailCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [activePageIndex, setActivePageIndex] = useState(0)

    const BoxTitles = ['Olhe seu email', 'Código do email', 'Sua nova senha']
    const InputTextProps = ['Email email', 'Código code', 'Senha password']

    const setStateMethods = [
        setEmail,
        setEmailCode,
        setNewPassword,
    ]

    const stateValues = [
        email, 
        emailCode, 
        newPassword,
    ]

    const nextPageHandle = () => {
        if(activePageIndex === 2){
            return
        }
        setActivePageIndex(activePageIndex+1)
    }

    return (
        <Container>
            <Head title="iHair | esqueci-senha"/>
            <FormBox>
                <div>
                    <div class="forget-password-hr"></div>
                    {InputTextProps.map((v, index) => (
                        <Circle isActive={index < activePageIndex}>
                            {index+1}
                        </Circle>
                    ))}
                </div>
                <Title>{BoxTitles[activePageIndex]}</Title>
                <TextInput
                    labelText={InputTextProps[activePageIndex].split(' ')[0]}
                    name={InputTextProps[activePageIndex].split(' ')[1]}
                    inputValue={stateValues[activePageIndex]}
                    isPassword={InputTextProps[activePageIndex].split(' ')[1] === 'password'}
                    changed={value => setStateMethods[activePageIndex](value)}
                />
                <SendEmailButton onClick={nextPageHandle}>
                    {activePageIndex < 2 ? "Enviar "+InputTextProps[activePageIndex].split(' ')[0].toLowerCase() : 'Concluir'}
                </SendEmailButton>
            </FormBox>
        </Container>
    )
}

export async function getServerSideProps(ctx){
    const possiblePageRedirect = HandlePageUnAuth(ctx)

    if(possiblePageRedirect) return possiblePageRedirect
    
    return {props: {}}
}

export default ForgotPassword
