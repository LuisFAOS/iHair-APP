import React,{useRef, useState, useEffect} from 'react'

import {
    Container, 
    ShowPasswordIcon, 
    PasswordIconContainer, 
    HidePasswordIcon,
} from './style'

function TextInput(props) {

    useEffect(() => {
        showError(props.showErrors)
        setFocus(!!props.inputValue.trim())
    },[props.showErrors, props.inputValue])

    const TextInputRef = useRef(null)

    const [isFocus, setFocus] = useState(false)
    const [passwordIsShowing, showPassword] = useState(false)
    const [errorIsShowing, showError] = useState(false)

    const onBlurHandler = () => {
        showError(!!props.ErrorMessage)
        setFocus(!!props.inputValue)
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
                <input 
                    onChange={event => {
                        props.changed(event.target.value.trim(), props.name)
                    }}
                    onBlur={async () => {
                        props.blured && await props.blured(props.inputValue, props.name)
                        onBlurHandler()
                    }}
                    value={props.inputValue}
                    type={props.isPassword ? 
                        passwordIsShowing ? "text" : "password" 
                        : "text"
                    }
                    ref={TextInputRef}/>
                {props.isPassword ? 
                    (
                        <PasswordIconContainer onClick={() => showPassword(!passwordIsShowing)}>
                            {!passwordIsShowing ? 
                                <ShowPasswordIcon/> 
                                : 
                                <HidePasswordIcon/>}
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

export default TextInput
