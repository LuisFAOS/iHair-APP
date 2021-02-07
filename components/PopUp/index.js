import React, { useEffect, useState } from 'react'

import {
    Container,
    ClosePopUp,
    TextWrapper,
    Header,
    Description,
    CloseIcon,
    WarningIcon,
    DoneIcon,
} from './style'

function Index(props) {

    let timeToClose;

    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        timeToClose = setTimeout(() => {
            props.setPopUpDatas(null)
            setIsOpen(false)
        }, 6000)
            
        return () => clearTimeout(timeToClose);
    }, [])

    const icons = {
        doneIcon: <DoneIcon/>,
        warningIcon: <WarningIcon/>,
    }

    return isOpen && (
                <Container>
                    <ClosePopUp>
                        <CloseIcon
                            onClick={() => {
                                clearTimeout(timeToClose)
                                props.setPopUpDatas(null)
                            }}
                        />
                    </ClosePopUp>
                    <TextWrapper>
                        <Header>
                            {icons[props.iconName]}
                        </Header>
                        <Description>
                            {props.message}
                        </Description>
                    </TextWrapper>
                </Container>
        )
}


export default Index
