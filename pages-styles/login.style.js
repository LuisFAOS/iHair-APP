import styled from 'styled-components'

import { Button } from '../components/Button.style'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-image: linear-gradient( to right, white 60%, var(--darkred) 40%);
`

export const FormBox = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 450px;
    max-width: 95%;
    height: 500px;

    border: 1px solid var(--whiteborder); 
    border-radius: 3px;

    background-color: white;
    box-shadow: 1px 1px 3px var(--shadow); 
`

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;

    position: absolute;
    top: -50px;

    background-color: white;

    border: 1px solid var(--whiteborder); 
    border-radius: 50%;
`

export const LogoImg = styled.img`
    width: 40px;
    height: 48px;
`

export const Header = styled.div`
    text-align: center;
    font-size: 1.8rem;

    margin-top: 90px;
    margin-bottom: 30px;
`

export const Form = styled.div`
    width: 300px;
    max-width: 95%;

    margin-bottom: 35px;
`

export const ForgotPasswordWrapper = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 25px;
`

export const LoginButton = styled(Button)`
    width: 50%;
`

export const SignUpButton = styled(Button)`
    background-color: var(--red);
    color: white;

    margin-top: 15px;
    width: 50%;
`