import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    padding: 5px 40px;
`

export const InputsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    padding: 15px;
    padding-right: 50px;
    padding-bottom: 0px;

    @media screen and (max-width: 1100px){
        padding-right: 20px;
    }

    @media screen and (max-width: 570px){
        align-items: center;
        flex-direction: column;

        & > :not(:first-child) {
            margin-top: 20px;
        }
    }
`
