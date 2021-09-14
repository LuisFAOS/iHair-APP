import React, { useContext, useEffect, useState, memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { baseURL } from '../utils/baseURL'
import HandleUnAuthPage from '../utils/pagesAuthHandlers/pageUnAuth.handler'
import AuthContext from '../context/Auth'
import { useHTTP } from '../hooks'

import Head from '../components/Head'
import TextInput from '../components/Fields/Text'
import CheckBox from '../components/CheckBox'
import PopUp from '../components/PopUp'
import Spinner from '../components/Spinner'

import {
    Container,
    FormBox,
    Title,
    Form,
    ForgotPasswordWrapper,
    LogoWrapper,
    LogoImg,
    LoginButton,
    SignUpButton,
} from '../styles/login.style'

function Login(props) {

    const [popUpProps, setPopUpProps] = useState(null)
    const [isLoading, sendRequest] = useHTTP()

    useEffect(() => {
        if(location.href.split("redirect=").pop() === 'true'){
            setPopUpProps({
                type: 'warning',
                message: 'Você tem que fazer login para continuar.'
            })
        }
    },[])
    
    const router = useRouter()    
    const { signIn } = useContext(AuthContext)
 
    const [clientData, setClientData] = useState({
        email: '',
        password: ''
    })
    const [isSalonOwner, setIsSalonOwner] = useState(false)

    const handleSubmit = async () => {
        await sendRequest({
            entity: isSalonOwner ? 'salon-owner/login' : 'normal-user/login',
            body: clientData
        }, newAuthClient => {
            signIn(newAuthClient)
            router.push('lista-saloes')
        }, setPopUpProps)
    }

    return (
        <Container>
            <Head title="iHair | login"/>
            {
                popUpProps &&
                    <PopUp
                        setPopUpProps={setPopUpProps}
                        type={popUpProps.type}
                        message={popUpProps.message}   
                    />
            }

            <FormBox>
                <LogoWrapper>
                    <LogoImg src="logo.png"/>
                </LogoWrapper>

                <Title>
                    Login
                </Title>
                    
                <Form>
                    <TextInput 
                        name="email" 
                        inputValue={clientData.email}
                        changed={value => setClientData({...clientData, email: value})}
                        labelText="Email"/>
                    <TextInput 
                        name="password" 
                        inputValue={clientData.password}
                        changed={value => setClientData({...clientData, password: value})}
                        labelText="Senha"
                        isPasswordInput/>

                    <CheckBox
                        value={isSalonOwner}
                        clicked={() => setIsSalonOwner(!isSalonOwner)}
                        labelText="Logar como dono de salão"
                    />
                    <ForgotPasswordWrapper>
                        <Link href="/esqueci-senha">
                            Esqueci minha senha!
                        </Link>
                    </ForgotPasswordWrapper>
                </Form>


                <LoginButton
                    onClick={handleSubmit}
                >
                    {isLoading ? 
                        <Spinner
                            size="small"
                            color="black"
                        /> 
                            : 
                        "Entrar"}
                </LoginButton>
                <Link href="/cadastrar-usuario">
                    <SignUpButton>
                            Cadastrar
                    </SignUpButton>
                </Link>
            </FormBox>
        </Container>
    )
}

export async function getServerSideProps(ctx){
    const possibleRedirect = HandleUnAuthPage(ctx)
    
    return possibleRedirect || {props: {}}
}

export default Login
