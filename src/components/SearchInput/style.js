import styled from 'styled-components'
import { Search } from 'styled-icons/bootstrap'

export const Container = styled.div`
    position: relative;

    background-color: #F7F7F7;

    width: 370px;
    height: 45px;

    border: 1px solid #f2f2f2;
    border-radius: 2px;

    display: flex;

    & > input{
        height: 100%;

        padding-left: 8px;
        font-size: 1.1rem;

        :focus{
            outline: none;
        }
    }
`

export const SearchIconBox = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;

    border-right: 1px solid #f2f2f2;
`

export const SearchIcon = styled(Search)`
    color: gray;

    width: 25px;
    height: 25px;
`