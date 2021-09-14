import styled from "styled-components"

export const Container = styled.div`
    width: 320px;

    @media screen and (max-width: 500px){
        padding: 15px 25px;
        width: 370px;
        max-width: 90%;
    }
`

export const FormTitle = styled.h1`
    font-weight: 600;
    font-size: 1.8rem;

    text-align: center;
    padding: 25px 0px;

`
