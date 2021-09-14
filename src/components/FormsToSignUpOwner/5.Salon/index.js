import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { useHTTP } from '../../../hooks'

import getCookie from '../../../utils/cookies/getCookie'
import { baseURL } from '../../../utils/baseURL'

import TextArea from '../../Fields/TextArea'
import ImagePicker from '../../ImagePicker'
import { Container, InputsWrapper } from './style'
import {
    FormTitle
} from "../../FormComponents.style"

function Form5(props) {

    useEffect(() => {
        setDescription(props.salonData.description || '')
        setBanner(props.salonData.banner || null)
    },[props.salonData.banner_img_base64, props.salonData.description])

    const [description, setDescription] = useState('')
    const [banner, setBanner] = useState({
        name: '',
        base64: '',
    })

    const [isLoading, {status, message, amount}, sendRequest] = useHTTP()
    const router = useRouter()

    const handleChange = file => {

        if(!file || !file.type.includes("image/")) return

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
        props.setIsLoading(true)
        try {
            if(banner && description.length < 150){
                await sendRequest({
                    entity: 'salon',
                    body: {...props.salonData, banner_img_base64: banner, salon_description: description}
                },() => {
                    props.onPopUpEvent('done', 'Seu salão foi registrado e está em análise!')
                    setTimeout(() => router.push('/login'), 5000)      
                })
                
                return
            }
            
            props.onPopUpEvent("warning", 'Banner ou/e Descrição inválido(s)')
        } catch (error) {
            console.log(error.message)
            props.onPopUpEvent("warning", 'Error interno. Nos desculpe e por favor, aguarde.')
        }
        props.setIsLoading(false)
    }
     
    return (
        <Container>
            <FormTitle>Dados do salão: </FormTitle>

            <InputsWrapper>
                <TextArea
                    labelText="Descrição do salão: "
                    maxLength={150}
                    max={150}
                    value={props.salonData.salon_desc || description}
                    onChange={event => {
                        setDescription(event.target.value.trim())
                    }}
                />

                <ImagePicker
                    image={props.salonData.banner_img_base64 || banner}
                    labelText="banner" 
                    handleChange={handleChange}
                    id="banner"/>
            </InputsWrapper>

            <button 
                id="btn-form5" 
                onClick={handleSubmit}
                type="button"></button>
        </Container>
    )
}

export default Form5
