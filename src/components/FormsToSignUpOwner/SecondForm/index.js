import React,{useEffect,useState, useCallback} from "react"

import {
    Container,
} from "./style"

import {
    FormTitle,
} from "../../FormComponents.style"

import ImagePicker from "../../ImagePicker"
import { baseURL } from "../../../utils/baseURL"
import { useHTTP } from "../../../hooks"
import CheckBox from "../../CheckBox"

function Form2(props){

    const [files, setFiles] = useState(null)
    const [specialty, setSpecialty] = useState({})
    const [isLoading, error, sendRequest] = useHTTP()

    useEffect(() => {
        props.setIsLoading(isLoading)
    }, [isLoading])

    useEffect(() => {
        setFiles({...props.ownerData.imgs})
    }, [props.ownerData.imgs])

    const handleFileChange = useCallback((file, key) => {

        if(!file || !file.type.includes("image/")) return

        const reader = new FileReader();
        reader.readAsDataURL(file)

        reader.onload = () => {
            const newFile = { 
                [key]:{
                    name: file.name,
                    base64: reader.result
                }
            }
            
            props.setOwnerData((prevState) => {
                return {...prevState, files: { ...newFile }}
            })
            
            setFiles((prevFilesState) => {
                return {...prevFilesState, ...newFile}
            })
        };

        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    },[])

    const registerSalonOwner = async() => {
        if(files && files.profile && files.certificate){                
            const ownerFormatted = {
                ...props.ownerData, files: {
                    profile_img_base64: files.profile.base64,
                    certficate_file_base64: files.certificate.base64
            }} 
                
            await sendRequest({
                entity: 'salon-owner',
                body: ownerFormatted
            }, (data) => props.handleNextForm(), 
            ({type, message}) => props.onPopUpEvent(type, message))

        }else props.onPopUpEvent("warning", "Todas os arquivos devem ser inseridos!")
    }

    const handleCheckClick = useCallback((field, value) => {
        props.setOwnerData((prevState) => {
            return {...prevState, speciality: { ...prevState.speciality, [field]: !value }}
        })
        
        setSpecialty((prevSpecialtyState) => {
            return {
                ...prevSpecialtyState,
                [field]: !value
            }
        })
    }, [])

    return(
        <Container>
            <FormTitle>Seus Dados: </FormTitle>
            <div className="wrapper-all-inputs">
                <picture className="imgsWrapper">
                    <ImagePicker 
                        image={files?.profile || props?.ownerData?.files?.profile}
                        labelText="sua foto" 
                        handleChange={handleFileChange}
                        id="profile"/>
                    <ImagePicker 
                        image={files?.certificate || props?.ownerData?.files?.certificate}
                        labelText="certificado" 
                        handleChange={handleFileChange}
                        id="certificate"/>
                </picture>
                
                <div className="specialization-list-box">
                    <p className="specialization-list-title">Especialização(ões)</p>

                    <div className="specialization-list-to-check">
                        <CheckBox labelText="Cabelereiro(a)" clicked={() => handleCheckClick('hairdresser', specialty.hairdresser)} value={specialty.hairdresser}/>
                        <CheckBox labelText="Barbeiro(a)" clicked={() => handleCheckClick('barber', specialty.barber)} value={specialty.barber}/>
                        <CheckBox labelText="Mani/Pedicure" clicked={() => handleCheckClick('nails', specialty.nails)} value={specialty.nails}/>
                    </div>
                </div>
            </div>
            <button 
                id="btn-form2" 
                onClick={registerSalonOwner}
            ></button>
        </Container>
    )
}


export default Form2
