import styled from 'styled-components'
import { Button } from '../components/Button.style'

export const Container = styled.div`
    padding-top: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
`

export const FormBox = styled.div`
    width: 400px;
    max-width: 98%;
    padding: 40px 30px;

    border: 1px solid var(--whiteborder);
    border-radius: 2px;
    box-shadow: 1px 1px 2px var(--shadow);

    @media screen and (max-width: 300px){
        padding: 40px 15px;
    }
`

export const Form = styled.div`
    & > div{
        margin-top: 5px!important;
    }
`

export const Title = styled.div`
    font-size: 1.7rem;
    font-weight: 600;

    padding-left: 15px;
    padding-bottom: 20px;
`

export const UpdateButton = styled(Button)`
    width: 80%;
`

export const ButtonBox = styled.div`
    margin: 40px auto;
    margin-bottom: 0px;

    display: flex;
    justify-content: center; 
`