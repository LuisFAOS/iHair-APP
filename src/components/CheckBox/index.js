import React, { useState } from 'react'

import PropTypes from 'prop-types'

import {
    Check,
    CheckFill,
    Container
} from './style'

function CheckBox({labelText, changed}){

    const [isCheck, setIsCheck] = useState(false)

    return(
        <Container onClick={() => {
            setIsCheck(!isCheck)
            changed(isCheck)
        }}>
            {isCheck ? <CheckFill/> : <Check/>}
            <label htmlFor="check">
                {labelText} 
            </label>
        </Container>
    )
}

CheckBox.propTypes={
    labelText: PropTypes.string.isRequired,
    changed: PropTypes.func.isRequired,
}

export default CheckBox