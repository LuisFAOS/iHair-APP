import styled, { css } from 'styled-components';
import { Check } from 'styled-icons/bootstrap';

import Image from 'next/image'
import { Button } from '../components/Button.style';

export const mediaQuery1100 = css`
    @media screen and (max-width: 1100px){
        display: none;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;    

    height: 100vh;
    width: 100vw;
    background-image: linear-gradient( to right, white 60%, var(--darkred) 30%);
`;

export const InputSide = styled.section`
    height: 100vh;

    display: flex;
    justify-content: end;
    align-items: center;

    @media screen and (max-width: 910px){
        justify-content: center;
        width: 100vw;
    }
`

export const ProgressSide = styled.section`
    display: flex;
    align-items: center;

    position: relative;
    
    & > div.wrapper-progressBox{
        height: 520px;
        margin-right: 50px;

        position: absolute;
        left: -23px;

        display: flex;
        flex-direction: column;
        justify-content: top;
    }

    @media screen and (max-width: 910px){
        display: none;
    }    
`

export const HeadImg = styled.img`
    margin: 10px 0px;
    margin-bottom: 10px;
    height: 180px;

    ${props => !props.isNotResized && 
        css` @media screen and (max-width: 500px){
            height: 120px;
        }` 
    }
`

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    overflow-x: hidden;

    width: 750px;
    max-width: 97%;
    height: 550px;
    border-radius: 4px;
    border: 1px solid var(--whiteborder);
    
    box-shadow: 1px 1px 3px var(--shadow);

    background-color: #ffffff;

    @media screen and (max-width: 1100px){
        height: 590px;
    }

    @media screen and (max-width: 660px){
        height: 100vh;
        max-width: 100%!important;
    }

`

export const ProgressBox = styled.div`
    display: flex;

    align-items: center;

    margin-top: 40px;

    & > span{
        color: white;

        margin-left: 10px;
    }
`

export const ProgressText = styled.div`
    padding-left: 20px;
    
    display: flex;
    flex-direction: column;
    flex: 1 1;

    & > span{
        font-size: .80rem;
        color: white;
    }

    & span:first-child{
        font-size: .90rem;
        font-weight: 600;
    }
`

export const ProgressCircle = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 1.7rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: gainsboro;
    border: 2px solid gainsboro;
    background-color: white;

    transition: .15s;

    @media screen and (max-width: 910px){
        width: 30px;
        height: 30px;

        font-size: 1.2rem;
    }
    
    @media screen and (max-width: 500px){
        width: 27px;
        height: 27px;

        font-size: 0.9rem; 
    }        
    
    ${props => props.isActive && css`
        background-color: var(--red);
        color: white;
        
        border: none;
    `}
 
`

export const FormFooter = styled.div`
    border-top: 1px solid whitesmoke;
    box-shadow: 0px -2px 2px whitesmoke;

    display: flex;
    justify-content: space-between;

    width: 100%;

    padding: 10px 60px 20px 60px;

    @media screen and (max-width: 500px){
        padding: 25px 20px; 
    }
`

export const PreviousButton = styled(Button)`
    &:disabled{
        color: gray;
    }
`

export const NextButton = styled(Button)`
    color: white;

    background-color: var(--red);
    &:disabled{
        background-color: rgba(220, 50, 69, 0.3);
    }
`

export const CheckIcon = styled(Check)`
    height: 42px;
    width: 42px;
`

export const CompressedProgressBar = styled.div` 
    @media screen and (min-width: 910px){
        display: none;
    }

    display: flex;
    justify-content: space-around;

    height: 40px;
    width: 270px;
    max-width: 95%;
    margin: 0px auto;
    margin-top: 10px;
`

