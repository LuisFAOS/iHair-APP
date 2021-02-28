import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    FiltersList,
    FilterSelect,
    ArrowDownIcon,
    CheckIcon,
} from './style'

function SelectInput(props) {

    const [showFilterList, setShowFilterList] = useState(false)

    return (
        <Container>
            <label
                onClick={() => setShowFilterList(!showFilterList)}
            >
                {props.filterBy}
                <ArrowDownIcon/>
            </label>
            {
                showFilterList && (
                    <FiltersList
                        show={showFilterList}
                    >
                        {props.filters.map((filter, index) => (
                            <FilterSelect 
                                isActive={filter === 'Cabeleleiro'}
                                key={index+new Date()}>
                                    {filter}
                                    {filter === 'Cabeleleiro' && <CheckIcon/>}
                            </FilterSelect>
                        ))}
                    </FiltersList>
                )
            }
            
        </Container>
    )
}

SelectInput.propTypes = {
    filterBy: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default SelectInput
