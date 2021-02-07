import React from 'react'

import {
    Container
} from './style'

function Index(props) {
    return (
        <Container
            width={props.width}
            height={props.height}
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
