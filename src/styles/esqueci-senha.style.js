import styled, {css} from 'styled-components'
import { Button } from '../components/Button.style'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: linear-gradient( to right, white 50%, var(--darkred) 50%);
`


export const FormBox = styled.div`
    & > :first-child{
        position: relative;

        width: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        margin-bottom: 15px;

        & > div.forget-password-hr{
            position: absolute;

            width: 84px;
            height: 2px;

            background-color: gainsboro;
        }
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
    border-radius: 3px;
    border: 1px solid var(--whiteborder);
    
    padding: 40px;
    padding-top: 20px;
    
    width: 400px;
    max-width: 100%;
`


export const Title = styled.p`
    align-self: flex-start;

    padding-left: 15px;
    padding-bottom: 15px;

    font-weight: 300;
    font-size: 1.5rem;
`

export const SendEmailButton = styled(Button)`
    width: 240px;
    max-width: 70%;
    margin: 15px auto 0px auto;
` 

export const Circle = styled.div`
    position: relative;


    width: 22px;
    height: 22px;

    border-radius: 100%;
    border: 2px solid gainsboro;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: .9rem;
    font-weight: 300;
    margin: 3px;

    ${props => props.isActive ? css`
        background-color: var(--red);
        color: white;
    ` : css`
        background-color: white;
    `}
`