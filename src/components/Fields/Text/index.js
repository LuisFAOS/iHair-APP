import React,{useRef, useState, useEffect} from 'react'

import PropTypes from 'prop-types'

import {
    Container, 
    ShowPasswordIcon, 
    PasswordIconContainer, 
    HidePasswordIcon,
} from './style'

function TextInput(props) {

    useEffect(() => {
        setErrorVisibility(props.isErrorsVisible)
        props.inputValue.trim() && setFocus(true)
    },[props.isErrorsVisible, props.inputValue])
    
    useEffect(() => {
        setErrorVisibility(!!props.ErrorMessage)
    },[props.ErrorMessage])
    
    const TextInputRef = useRef(null)

    const [isFocus, setFocus] = useState(false)
    const [isPasswordVisible, setPasswordVisibility] = useState(false)
    const [isErrorVisible, setErrorVisibility] = useState(false)

    return (
        <div className="input-content-wrapper">
            <Container isFocus={isFocus} iswrong={isErrorVisible}>
                <label onClick={() => TextInputRef.current.focus()}>
                    {props.labelText}
                </label>
                <input 
                    onChange={event => {
                        props.changed(event.target.value.trim(), props.name)
                    }}
                    onBlur={() => {
                        props.blured && props.blured(props.inputValue, props.name)
                        setFocus(!!props.inputValue.trim())
                    }}
                    onFocus={() => !isFocus && setFocus(true)}
                    value={props.inputValue}
                    type={props.isPasswordInput ? 
                        isPasswordVisible ? "text" : "password" 
                        : "text"
                    }
                    ref={TextInputRef}/>
                {props.isPasswordInput && 
                    (
                        <PasswordIconContainer onClick={() => setPasswordVisibility(!isPasswordVisible)}>
                            {!isPasswordVisible ? 
                                <ShowPasswordIcon/> 
                                : 
                                <HidePasswordIcon/>}
                        </PasswordIconContainer>
                    )
                }
            </Container>
            <span>
                {isErrorVisible && props.ErrorMessage}
            </span>
        </div>
    )
}

TextInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    ErrorMessage: PropTypes.string,
    isPasswordInput: PropTypes.bool,
    name: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    changed: PropTypes.func.isRequired,
    blured: PropTypes.func,
}

export default TextInput
