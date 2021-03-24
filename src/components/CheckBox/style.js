import { CheckSquareFill, Square } from '@styled-icons/bootstrap'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;


    margin-left: 15px;

    & > input{
        width: 15px;
        height: 15px;
        
        cursor: pointer;
    }

    & > label{
        font-size: 16px;
        font-weight: 300;
        
        margin-left: 5px;
        cursor: pointer;
    }
`

export const CheckFill = styled(CheckSquareFill)`
    color: var(--red);

    width: 20px;
    height: 20px;
`

export const Check = styled(Square)`
    color: gray;

    width: 20px;
    height: 20px;
`