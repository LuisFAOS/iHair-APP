import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    padding: 5px 40px;

    & > .image-container{
        display: flex;
        justify-content: space-between; 
        
        padding: 10px 15px;

    }

    @media screen and (max-width: 550px){
        & > .image-container{
            flex-direction: column;

            & > *{
                margin: 5px 0px;
            }
        }
    }
`