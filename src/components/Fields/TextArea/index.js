import React from 'react'

import {
    Container,
    TextArea
} from "./style"

function Index(props) {
    return (
        <Container>
            <label>
                {props.labelText}
            </label>
            <TextArea {...props}/>
        </Container>
    )
}

export default Index
