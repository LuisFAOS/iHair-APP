import React from 'react'

import PropTypes from 'prop-types'

import {
    Container
} from './style'

function CheckBox({labelText, changed, value}){
    return(
        <Container>
            <input 
                onChange={event => changed(!event.target.checked)}
                value={value}
                type="checkbox" 
                id="check"/>
            <label htmlFor="check">
                {labelText} 
            </label>
        </Container>
    )
}

CheckBox.propTypes={
    labelText: PropTypes.string,
    changed: PropTypes.func,
    value: PropTypes.bool
}

export default CheckBox