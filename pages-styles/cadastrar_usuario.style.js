import styled from 'styled-components'

import { Button } from "../components/Button.style"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    @media screen and (max-width: 1100px){
        & > :first-child{
            width: 32%;
        }
        & > :not(:first-child){
            width: 67%;
        }
    }

    @media screen and (max-width: 1100px){
        & > :first-child{
            display: none;
        }
        & > :not(:first-child){
            width: 100%;
        }
    }
`

export const InputSide = styled.div`
    width: 60%;
    height: 100%;

    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
`

export const FormTitle = styled.div`
    margin-bottom: 30px;

    text-align: center;
    font-size: 2.3rem;
    font-weight: 600;
`

export const FormBox = styled.div`
    width: 670px;
    max-width: calc(100% - 40px);
    margin: 0px 20px;
    padding: 30px 20px;

    border-radius: 5px;
    box-shadow: 1px 1px 3px var(--shadow); 

    @media screen and (max-width: 660px){
        & > form > div{
            flex-direction: column;
            align-items: center;

            margin: 0px;

            & > div{
                width: 260px!important; 
                max-width: 100%;

                margin-bottom: 15px;
            }
        }
    }
`

export const SignUpButton = styled(Button)`
    background-color: var(--red);
    color: white;

    width: 200px;

    display: flex;
    justify-content: center;
`

export const ButtonBox = styled.div`
    display:flex;
    justify-content: center;

    margin-top: 30px;
`

export const ApresentationSide = styled.div`
    width: 40%;
    height: 100%;

    position: relative;

    background-color: var(--red);

    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;

    & > div#logo{
        & > img{
            width: 45px;
            height: 53px;

            margin-bottom: 40px;
        }
    }

    & > div#apresentation-title{
        color: white;
        font-size: 2.3rem;
        font-weight: 600;
    }

    & > div#apresentation-description{
        color: white;
        text-align: center;
        padding: 20px;

        margin: 10px 0px;
    }

`

export const BackPageButton = styled.div`
    position: absolute;

    top: 8px;
    left: 15px;
`

export const KnowMoreButton = styled(Button)`
    border: 1px solid white;

    margin-top: 5px;

    color: white;

    :focus{
        box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.4);
    }
`

export const CheckBoxContainer = styled.div`
    @media screen and (max-width: 660px){
        display: flex;

        & > div{
            justify-content: center;
        }

        & ~ div{
            margin-top: 10px!important;
        }
    }
`