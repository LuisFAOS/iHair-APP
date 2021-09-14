import React,{useRef, useState, useEffect} from 'react'

import { Field } from 'formik'
import PropTypes from 'prop-types'

import {
    Container, 
    ShowPasswordIcon, 
    PasswordIconContainer, 
    HidePasswordIcon,
} from '../Text/style'

function FormikField(props) {

    useEffect(() => {
        setErrorVisibility(props.isErrorsVisible)
        props.inputValue && setFocus(true)
    },[props.isErrorsVisible, props.inputValue])
    
    const TextInputRef = useRef(null)

    const [isFocus, setFocus] = useState(false)
    const [isPasswordVisible, setPasswordVisibility] = useState(false)
    const [isErrorVisible, setErrorVisibility] = useState(false)

    const onBlurHandler = () => {
        setErrorVisibility(true)
        setFocus(!!props.inputValue.trim())
    }

    return (
        <div className="input-content-wrapper">
            <Container isFocus={isFocus} iswrong={isErrorVisible}>
                <label onClick={() => TextInputRef.current.focus()}>
                    {props.labelText}
                </label>
                <Field
                    name={props.name}
                    innerRef={TextInputRef}
                    onBlur={() => onBlurHandler()}
                    onFocus={() => !isFocus && setFocus(true)}
                    type={props.isPasswordInput ? 
                        isPasswordVisible ? "text" : "password" 
                        : "text"
                }/>
                {props.isPasswordInput && 
                    (
                        <PasswordIconContainer onClick={() => setPasswordVisibility(!isShowingPassword)}>
                            {
                                !isPasswordVisible ? 
                                    <ShowPasswordIcon/> 
                                        : 
                                    <HidePasswordIcon/>
                            }
                        </PasswordIconContainer>
                    )
                }
            </Container>
            <span className="input-error-message">
                {isErrorVisible && props.ErrorMessage}
            </span> 
        </div>
    )
}

FormikField.propTypes={
    labelText: PropTypes.string.isRequired,
    ErrorMessage: PropTypes.string,
    isPasswordInput: PropTypes.bool,
    isErrorsVisible: PropTypes.bool,
    name: PropTypes.string,
    inputValue: PropTypes.string
}

export default FormikField
