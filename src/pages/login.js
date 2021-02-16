import React, { useContext, useState } from 'react'

import { baseURL } from '../native/baseURL'
import AuthContext from '../AuthContext'

import Link from 'next/link'
import TextInput from '../components/TextInput'
import CheckBox from '../components/CheckBox'
import PopUp from '../components/PopUp'
import Loading from '../components/Loading'

import {
    Container,
    FormBox,
    Header,
    Form,
    ForgotPasswordWrapper,
    LogoWrapper,
    LogoImg,
    LoginButton,
    SignUpButton,
} from '../styles/login.style'

function Login() {

    const {signIn} = useContext(AuthContext)

    const [loginDatas, setLoginDatas] = useState({
        email: '',
        password: ''
    })
    const [isSalonOwner, setIsSalonOwner] = useState(false)
    const [popUpDatas, setPopUpDatas] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)

        try {
            const apiURL = `${baseURL}/${isSalonOwner ? 'salon-owner' : 'normal-user'}/login`

            const loginResponse = await fetch(apiURL,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(loginDatas)
            })

            if(loginResponse.status >= 400 && loginResponse.status <= 499){
                const error = await loginResponse.text()
                setPopUpDatas({
                    iconName: 'warningIcon',
                    message: error
                })
            }else{
                const authDatas = await loginResponse.json()

                signIn(authDatas)
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

            <FormBox>
                <LogoWrapper>
                    <LogoImg src="logo.png"/>
                </LogoWrapper>

                <Header>
                    Login
                </Header>
                    
                <Form>
                    <TextInput 
                        name="email" 
                        inputValue={loginDatas.email}
                        changed={value => setLoginDatas({...loginDatas, email: value})}
                        labelText="Email"/>
                    <TextInput 
                        name="password" 
                        inputValue={loginDatas.password}
                        changed={value => setLoginDatas({...loginDatas, password: value})}
                        labelText="Senha"
                        isPassword/>

                    <CheckBox
                        value={isSalonOwner}
                        changed={setIsSalonOwner}
                        labelText="Logar como dono de salão"
                    />
                    <ForgotPasswordWrapper>
                        <Link href="#">
                            Esqueci minha senha!
                        </Link>
                    </ForgotPasswordWrapper>
                </Form>


                <LoginButton
                    onClick={handleSubmit}
                >
                    {loading ? 
                        <Loading 
                            size="small"
                            color="black"
                        /> 
                            : 
                        "Entrar"}
                </LoginButton>
                <Link href="/cadastrar_usuario">
                    <SignUpButton>
                            Cadastrar
                    </SignUpButton>
                </Link>
            </FormBox>
        </Container>
    )
}

export default Login
