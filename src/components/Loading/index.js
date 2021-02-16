import React from 'react'

import PropTypes from 'prop-types'

import {
    Container
} from './style'

function Spinner(props) {
    return (
        <Container
            size={props.size}
            color={props.color}
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

Spinner.propTypes = {
    size: PropTypes.string
}

export default Spinner
