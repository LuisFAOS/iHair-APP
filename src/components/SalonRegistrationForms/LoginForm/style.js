import styled from "styled-components"

export const Container = styled.div`
    padding: 15px 0px;
    width: 320px;

    @media screen and (max-width: 500px){
        padding: 15px 35px;
        width: 370px;
        max-width: 90%;
    }
`

export const Title = styled.div`
    font-weight: 600;
    font-size: 1.8rem;

    text-align: center;
    padding: 25px 0px;

`