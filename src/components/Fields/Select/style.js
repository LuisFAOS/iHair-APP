import styled, { css } from 'styled-components'
import { CaretDownFill, CaretUpFill, Check } from 'styled-icons/bootstrap'

export const Container = styled.div`
    position: relative;

    & > label{
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
    
        border: 1px solid gainsboro;
        border-radius: 3px;

        width: 230px;
        height: 35px;

        padding: 0px 15px;
    }
`

export const ArrowDownIcon = styled(CaretDownFill)`
    width: 13px;
    height: 13px;
`

export const ArrowUpIcon = styled(CaretUpFill)`
    width: 13px;
    height: 13px;
`

export const FiltersList = styled.div`
    position: absolute;
    z-index: 9999;

    margin-top: 10px;

    width: 230px;

    border: 1px solid gainsboro;
    box-shadow: 1px 1px 3px var(--shadow);
`

export const FilterSelect = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;

    padding: 10px;

    cursor: pointer;

    transition: .15s;
    :hover{
        background-color: whitesmoke;
    }

    ${props => props.isActive && css`
        :hover{
            background-color: var(--red);
        }
        color: white;
        background-color: var(--red);
    `}
`

export const CheckIcon = styled(Check)`
    width: 23px;
    height: 20px;
`
