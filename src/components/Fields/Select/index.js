import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    FiltersList,
    FilterSelect,
    ArrowDownIcon,
    ArrowUpIcon,
    CheckIcon,
} from './style'

function SelectInput({title, items, onSelected, selectedItem}) {

    const [isVisibleList, setIsVisibleList] = useState(false) 

    return (
        <Container>
            <label onClick={() => setIsVisibleList(!isVisibleList)}>
                {title}
                {isVisibleList ? <ArrowUpIcon/> : <ArrowDownIcon/>}
            </label>
            {
                isVisibleList && (
                    <FiltersList
                        show={isVisibleList}
                    >
                        {items.map((item, index) => (
                            <FilterSelect
                                onClick={() => onSelected(item)}
                                isActive={item === selectedItem}
                                key={index+new Date()}>
                                    {item}
                                    {item === selectedItem && <CheckIcon/>}
                            </FilterSelect>
                        ))}
                    </FiltersList>
                )
            }
            
        </Container>
    )
}

SelectInput.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelected: PropTypes.func.isRequired,
    selectedItem: PropTypes.string,
}

export default SelectInput
