import React,{useEffect,useState} from "react"

import {
    Container,
    Wrapper,
} from "./style"

import {
    Title,
} from "../../FormComponents.style"

import ImagePicker from "../../ImagePicker"
import { baseURL } from "../../../baseURL"

function Form2(props){

    const [images, setImages] = useState(null)

    useEffect(() => {
        setImages({...props.ownerDatas.imgs})
    }, [props.ownerDatas.imgs])

    const handleChange = (file, key) => {

        if(!file || !file.type.includes("image/")){
            return
        }

        const reader = new FileReader();
        reader.readAsDataURL(file)

        reader.onload = () => {
            const newImage = { 
                [key]:{
                    name: file.name,
                    base64: reader.result
                }
            }

            setImages({...images, ...newImage})
        };

        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }

    const registerSalonOwner = async() => {
        props.setLoading(true)
        try{
            if(images && images.profile && images.certificate){
                
                const ownerFormatted = {
                    ...props.ownerDatas, imgs: {
                        profileImgInBase64: images.profile.base64,
                        certficateImgInBase64: images.certificate.base64
                }} 
                
                const ownerRouteResponse = await fetch(`${baseURL}/salon-owner`,{
                    method: 'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify(ownerFormatted)
                })
                
                if(ownerRouteResponse.status >= 400 && ownerRouteResponse.status <= 499){
                    const ownerResponseText = await ownerRouteResponse.text()
                    props.onPopUpEvent("warningIcon", ownerResponseText)
                }else {
                    const ownerResponseJSON = await ownerRouteResponse.json()
                    props.nextPageHandler()
                }
            }else{
                props.onPopUpEvent("warningIcon", "Todas as imagens devem ser inseridas!")
            }
        }catch(error){
            console.log(error.message)
            props.onPopUpEvent("warningIcon", 'Error interno. Nos desculpe e por favor, aguarde.')
        }
        props.setLoading(false)
    }

    return(
        <Container>
            <Title>Seus Dados: </Title>
            <div className="image-container">
                <ImagePicker 
                    image={images && images.profile}
                    labelText="Escolher foto de perfil" 
                    handleChange={handleChange}
                    id="profile"/>
                <ImagePicker 
                    image={images && images.certificate}
                    labelText="Escolher certificado" 
                    handleChange={handleChange}
                    id="certificate"/>
            </div>
            <button 
                id="btn-form2" 
                onClick={registerSalonOwner}></button>
        </Container>
    )
}


export default Form2