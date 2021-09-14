import React,{useContext, useState, useCallback, useEffect} from 'react'

import { baseURL } from '../../../utils/baseURL'
import AuthContext from '../../../context/Auth'

import TextInput from '../../Fields/Text'
import { 
    Container, 
    FormTitle,
} from './style'

import { useHTTP } from '../../../hooks'

function Index(props) {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [isLoading, error, sendRequest] = useHTTP()

    const {message, amount, status} = error

    useEffect(() => {
        if(message && status != 0) props.onPopUpEvent('warning', message)
    }, [amount])

    const handleInputChange = useCallback((value, field) => {
        setLoginData((prevLoginDataState) => {
            return {
                ...prevLoginDataState, 
                [field]: value
            }
        })
    }, [])

    const {signIn} = useContext(AuthContext)

    const handleSubmit = async () => {
        const [emailTrimmed, passwordTrimmed] = [loginData.email.trim(), loginData.password.trim()]    

        if(!emailTrimmed.includes('@') || passwordTrimmed.length < 8 || emailTrimmed.length < 3){
            props.setIsLoading(false)
            return props.onPopUpEvent('warning', 'Email ou senha inválidos/vázios!')
        }
               
        await sendRequest({
            entity: 'salon-owner/login',
            body: loginData
        }, newAuthSalonOwner => {
            signIn(newAuthSalonOwner)
            props.handleNextForm()            
        })
    }

    return (
        <Container>
            <FormTitle>
                Logue-se
            </FormTitle>
            <div className='inputs-wrapper'>
                <TextInput
                    name="email" 
                    inputValue={loginData.email}
                    changed={handleInputChange}
                    labelText="Email"
                />
                <TextInput
                    name="password" 
                    inputValue={loginData.password}
                    changed={handleInputChange}
                    labelText="Senha"
                    isPassword
                />
                <button 
                    id="btn-form3" 
                    onClick={handleSubmit}
                    type="button"></button>
            </div>
        </Container>
    )
}

export default Index
