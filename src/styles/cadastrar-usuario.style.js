import styled, { css } from 'styled-components'
import { KeyboardArrowLeft } from "styled-icons/material"

import { Button } from "../components/Button.style"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

`

export const BackPageIcon = styled(KeyboardArrowLeft)`
    width: 20px;
    height: 20px;
`

export const InputSide = styled.section`
    width: 57%;
    height: 100%;

    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center;

    @media screen and (max-width: 1100px){
        width: 100%;
    }
`

export const FormTitle = styled.h1`
    margin-bottom: 30px;

    text-align: center;
    font-size: 2.3rem;
    font-weight: 600;

    @media screen and (max-width: 410px){
        font-size: 1.9rem;
    }
`

export const FormBox = styled.div`
    position: relative;

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

export const PresentationSide = styled.section`
    width: 43%;
    height: 100%;

    border-radius: 0 50% 50% 0;

    position: relative;
    padding-right: 10px;

    background-color: var(--red);

    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;

    & > figure#logo{
        & > img{
            width: 45px;
            height: 53px;

            margin-bottom: 40px;
        }
    }

    & > h1#presentation-title{
        color: white;
        font-size: 2.3rem;
        font-weight: 600;
    }

    & > p#presentation-description{
        color: white;
        text-align: center;
        padding: 20px;

        margin: 10px;
    }

    @media screen and (max-width: 1100px){
        display: none;
    }
`

export const BackgroundCircle = styled.div`
    position: absolute;

    background-color: var(--red);
    
    ${props => props.isStaticSize ? css`
        display: block;        

        width: 75px;
        height: 85px;

        right: 0px;
        bottom: 0px;
        
        border-radius: 100% 0 0 0;` 
    :
    css`
        width: 280px;
        height: 310px;

        display: none;
        
        left: 0px;
        top: 0px;
        
        z-index: 11;        

        border-radius: 0 0 105% 0;
        
        @media screen and (max-width: 1100px){
            display: block; 
        }
    
        @media screen and (max-width: 975px){
            width: 210px;
            height: 240px;
        }    

        @media screen and (max-width: 745px){
            width: 170px;
            height: 200px;
        }

        @media screen and (max-width: 605px){
            width: 140px;
            height: 170px;
        }

        @media screen and (max-width: 520px){
            width: 100px;
            height: 130px;
        }
    `}
`

export const BackPageButton = styled.span`
    position: absolute;

    display: flex;
    justify-content: center;    

    top: 8px;
    left: 25px;

    z-index: 12;

    color: white;
    & > a {
        text-decoration: none;
    }

    @media screen and (max-width: 520px){
        left: 10px;
    }
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
