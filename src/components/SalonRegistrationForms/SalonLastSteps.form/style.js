import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    padding: 5px 40px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    padding: 15px;

    @media screen and (max-width: 500px){
        flex-direction: column;
    }
`