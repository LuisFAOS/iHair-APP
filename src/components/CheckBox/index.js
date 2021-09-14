import React, { useState } from 'react'

import PropTypes from 'prop-types'

import {
    Check,
    CheckFill,
    Container
} from './style'

function CheckBox({labelText, clicked, value}){
    return(
        <Container onClick={clicked}>
            {value ? <CheckFill/> : <Check/>}
            <label
                htmlFor="check">
                {labelText} 
            </label>
        </Container>
    )
}

CheckBox.propTypes={
    labelText: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired
}

export default CheckBox
