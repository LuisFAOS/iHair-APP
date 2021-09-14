import React from 'react'

import PropTypes from 'prop-types'

import {
    Container
} from './style'

function Spinner({size, color}) {
    return (
        <Container
            size={size}
            color={color}
        >
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    )
}

Spinner.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Spinner
