import React from 'react'

import {
    Container
} from './style'

function Index(props) {
    return (
        <Container
            size={props.size}
        >
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    )
}

export default Index
