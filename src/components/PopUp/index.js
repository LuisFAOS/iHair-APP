import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import {
    Container,
    ClosePopUpBox,
    Description,
    CloseIcon,
    WrapperButtons,     
    YesButton,
    NoButton,
} from './style'

function PopUp({setPopUpProps, message, type, funcAfterConfirmation}) {

    let timeToClose;

    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if(type !== 'question'){    
            timeToClose = setTimeout(() => {
                setPopUpProps(null)
                setIsOpen(false)
            }, 6000)

            return () => clearTimeout(timeToClose);
        }
    }, [])

    return isOpen && (
                <Container type={type}>
                    { type !=='question' && (
                        <ClosePopUpBox>
                            <CloseIcon
                                onClick={() => {
                                    clearTimeout(timeToClose)
                               	    setPopUpProps(null)
                                }}
                            />
                        </ClosePopUpBox>)}
                    <Description>
                        {message}
                    </Description>
                    {type==='question' && (
                        <WrapperButtons>
                            <YesButton onClick={funcAfterConfirmation}>Sim</YesButton>
                            <NoButton 
                                onClick={() => {
                                    clearTimeout(timeToClose)
                                    setPopUpProps(null)
                                }}>
                                Não
                            </NoButton>
                        </WrapperButtons>
                    )}
                </Container>
        )
}

PopUp.propTypes = {
    setPopUpProps: PropTypes.func.isRequired,
    type: PropTypes.string,
    message: PropTypes.string.isRequired,
    funcAfterConfirmation: PropTypes.func
}

export default PopUp
