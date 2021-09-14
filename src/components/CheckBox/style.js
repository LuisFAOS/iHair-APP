import { CheckSquareFill, Square } from '@styled-icons/bootstrap'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: max-content;    

    cursor: pointer;
    
    margin-left: 15px;

    & > input{
        width: 15px;
        height: 15px;
        
        cursor: pointer;
    }

    & > label{
        font-size: .9rem;
        font-weight: 300;
        
        margin-left: 5px;
        cursor: pointer;
    }
`

export const CheckFill = styled(CheckSquareFill)`
    color: var(--red);
    cursor: pointer;
    width: 16px;
    height: 16px;
`

export const Check = styled(Square)`
    color: gray;
    cursor: pointer;
    width: 16px;
    height: 16px;
`
