import React,{useContext, useState} from 'react'

import { baseURL } from '../../../native/baseURL'
import AuthContext from '../../../AuthContext'

import TextInput from '../../TextInput'
import { 
    Container, 
    Title,
} from './style'


function Index(props) {

    const [loginDatas, setLoginDatas] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (value, field) => {
        setLoginDatas({
            ...loginDatas, 
            [field]: value
        })
    }

    const {signIn} = useContext(AuthContext)

    const handleSubmit = async () => {
        props.setLoading(true)
        try{
            const loginResponse = await fetch(`${baseURL}/salon-owner/login`,{
                method: 'post',
                headers:{
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(loginDatas)
            })
    
            if(loginResponse.status >= 400 && loginResponse.status <= 499){
                const responseTextError = await loginResponse.text()
                props.onPopUpEvent("warningIcon", responseTextError)
            }else{
                const authDatas = await loginResponse.json()
                
                signIn(authDatas)
                
                props.nextPageHandler()
            }
            
        }catch(error){
            console.log(error.message)
            props.onPopUpEvent("warningIcon", 'Error interno. Nos desculpe e por favor, aguarde.')
        }
        props.setLoading(false)
    }

    return (
        <Container>
            <Title>
                Logue-se
            </Title>
            <div>
                <TextInput
                    name="email" 
                    inputValue={loginDatas.email}
                    changed={handleInputChange}
                    labelText="Email"
                />
                <TextInput
                    name="password" 
                    inputValue={loginDatas.password}
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
