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
        font-size: 14px;
        
        margin-left: 5px;
        cursor: pointer;
    }
`