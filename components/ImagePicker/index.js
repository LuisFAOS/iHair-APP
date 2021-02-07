import React,{useState} from 'react'

import {
    ImagePickerBox, 
    Image, 
    UploadIcon, 
    Container,
} from "./style"

function ImagePicker(props) {

    return (
        <Container>
            <ImagePickerBox>
                <label htmlFor={props.id}>
                    <div>
                        {props.image ? props.image.name : props.labelText}
                    </div>
                    <div>
                        <UploadIcon/>
                    </div>
                </label>
                <input 
                    accept="image/*"
                    onChange={event => {
                        props.handleChange(event.target.files[0], props.id)
                    }}
                    type="file" 
                    id={props.id}/>
            </ImagePickerBox>
            {props.image && <Image src={props.image.base64}/>}
        </Container>
    )
}

export default ImagePicker
