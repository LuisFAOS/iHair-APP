import React from 'react'

import PropTypes from 'prop-types'

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

ImagePicker.propTypes={
    id: PropTypes.string,
    image: PropTypes.object,
}

export default ImagePicker
