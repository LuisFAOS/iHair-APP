import React,{useState,useEffect} from 'react'

import TextArea from '../../TextArea'
import ImagePicker from '../../ImagePicker'
import { Container, Wrapper } from './style'
import {
    Title
} from "../../FormComponents.style"
import getCookie from '../../../getCookie'
import { baseURL } from '../../../baseURL'

function Form5(props) {

    useEffect(() => {
        setDescription(props.salonDatas.description || '')
        setBanner(props.salonDatas.banner || null)
    },[props.salonDatas.banner, props.salonDatas.description])

    const [description, setDescription] = useState('')
    const [banner, setBanner] = useState(null)
    

    const handleChange = file => {

        if(!file || !file.type.includes("image/")){
            return
        }

        const reader = new FileReader();
        reader.readAsDataURL(file)

        reader.onload = () => {
            const newImage = {
                name: file.name,
                base64: reader.result
            }

            setBanner({...newImage})
        };

        reader.onerror = error => {
            console.log('Error: ', error);
        };
    }

    const handleSubmit = async () => {
        props.setLoading(true)
        try {
            if(banner && description.length < 150){
                const salonRouteResponse = await fetch(`${baseURL}/salon`,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json', 
                        'authorization': getCookie("authToken")
                    },
                    body: JSON.stringify({
                        salonDatas:{
                            ...props.salonDatas, 
                            bannerImgInBase64: banner.base64,
                            isAcceptPersonPhoneAsContact: false,
                            description
                        }})
                })
    
                if(salonRouteResponse.status >= 400 && salonRouteResponse.status <= 499){
                    const salonResponseText = await salonRouteResponse.text()
                    props.onPopUpEvent("warningIcon", salonResponseText)
                }else{
                    const salonResponseJSON = await salonRouteResponse.json()
                }
            }else{
                props.onPopUpEvent("warningIcon", 'Banner ou/e Descrição inválido(s)')
            }
            
        } catch (error) {
            console.log(error.message)
            props.onPopUpEvent("warningIcon", 'Error interno. Nos desculpe e por favor, aguarde.')
        }
        props.setLoading(false)
    }
     
    return (
        <Container>
            <Title>Dados do salão: </Title>

            <Wrapper>
                <TextArea
                    labelText="Descrição do salão: "
                    maxLength={150}
                    max={150}
                    value={props.salonDatas.description || description}
                    onChange={event => {
                        setDescription(event.target.value.trim())
                    }}
                />

                <ImagePicker
                    image={props.salonDatas.banner || banner}
                    labelText="Escolher banner" 
                    handleChange={handleChange}
                    id="banner"/>
            </Wrapper>

            <button 
                id="btn-form5" 
                onClick={handleSubmit}
                type="button"></button>
        </Container>
    )
}

export default Form5