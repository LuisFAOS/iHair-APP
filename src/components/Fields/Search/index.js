import React from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    SearchIconBox,
    SearchIcon,
} from './style'

function SearchInput(props) {

    return (
        <Container id={props.id+"-box"}>
            <SearchIconBox htmlFor={props.id}>
                <SearchIcon/>
            </SearchIconBox>
            <input id={props.id} placeholder={props.placeholder}/>
        </Container>
    )
}

SearchInput.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
}

export default SearchInput
