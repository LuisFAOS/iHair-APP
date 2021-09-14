import React from 'react'

import PropTypes from 'prop-types'

import {
    ImagePickerBox, 
    Image, 
    PlusCircleIcon, 
    Container,
} from "./style"

function ImagePicker(props) {

    return (
        <ImagePickerBox>
            <label htmlFor={props.id}>
                <p>
                    {props.image ? `Trocar ${props.labelText}` : `Escolher ${props.labelText}`}
                </p>
                {props.image ? <Image src={props.image.base64}/> : <PlusCircleIcon/>}
            </label>
            <input 
                accept="image/*"
                onChange={event => {
                    props.handleChange(event.target.files[0], props.id)
                }}
                type="file" 
                id={props.id}/>
        </ImagePickerBox>
    )
}

ImagePicker.propTypes={
    id: PropTypes.string,
    image: PropTypes.object,
}

export default ImagePicker
