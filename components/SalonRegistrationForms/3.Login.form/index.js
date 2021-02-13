import React,{useState} from 'react'
import { baseURL } from '../../../baseURL'
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
                const {authToken} = await loginResponse.json()
                
                const todayDate = new Date()
                todayDate.setTime(todayDate.getTime() + (3 * 24 * 60 * 60 * 1000))
                document.cookie = `authToken=${authToken}; expires=${todayDate}; path=/`
                
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
