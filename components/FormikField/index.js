import React,{useRef, useState, useEffect} from 'react'

import { Field } from 'formik'
import PropTypes from 'prop-types'

import {
    Container, 
    ShowPasswordIcon, 
    PasswordIconContainer, 
    HidePasswordIcon,
} from '../TextInput/style'

function FormikField(props) {

    useEffect(() => {
        showError(props.showErrors)
        setFocus(!!props.inputValue.trim())
    },[props.showErrors, props.inputValue])
    
    const TextInputRef = useRef(null)

    const [isFocus, setFocus] = useState(false)
    const [passwordIsShowing, showPassword] = useState(false)
    const [errorIsShowing, showError] = useState(false)

    const onBlurHandler = () => {
        showError(true)
        setFocus(!!props.inputValue.trim())
    }

    return (
        <>
            <Container isFocus={isFocus}>
                <label onClick={() => {
                    TextInputRef.current.focus()
                    setFocus(true)
                }}>
                    {props.labelText}
                </label>
                <Field
                    name={props.name}
                    innerRef={TextInputRef}
                    onBlur={() => onBlurHandler()}
                    type={props.isPassword ? 
                        passwordIsShowing ? "text" : "password" 
                        : "text"
                }/>
                {props.isPassword ? 
                    (
                        <PasswordIconContainer onClick={() => showPassword(!passwordIsShowing)}>
                            {
                                !passwordIsShowing ? 
                                    <ShowPasswordIcon/> 
                                        : 
                                    <HidePasswordIcon/>
                            }
                        </PasswordIconContainer>
                    )
                    :
                    null
                }
            </Container>
            <span>
                {errorIsShowing && props.ErrorMessage}
            </span> 
        </>
    )
}

FormikField.propTypes={
    labelText: PropTypes.string,
    ErrorMessage: PropTypes.string,
    isPassword: PropTypes.bool,
    name: PropTypes.string,
    inputValue: PropTypes.string
}

export default FormikField
