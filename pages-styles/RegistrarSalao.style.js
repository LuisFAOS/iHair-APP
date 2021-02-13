import styled, { css } from 'styled-components';
import { Check } from 'styled-icons/bootstrap';
import { Button } from '../components/Button.style';

export const mediaQuery1100 = css`
    @media screen and (max-width: 1100px){
        display: none;
    }
`

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient( to right, white 60%, var(--darkred) 30%);
`;

export const InputSide = styled.div`
    width: 70%;
    height: 100vh;

    & > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    @media screen and (max-width: 1100px){
        width: 100vw;
    }
`

export const ProgressSide = styled.div`
    display: flex;
    align-items: center;
    
    width: 30%;

    position: relative;
    
    & > div{
        height: 520px;
        margin-right: 50px;

        position: absolute;
        left: -23px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    @media screen and (max-width: 1100px){
        display: none;
    }
    
`

export const Icon = styled.img`
    margin: 20px 0px;
    margin-bottom: 20px;
    height: 180px;
`

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 750px;
    max-width: 97%;
    height: 525px;
    border-radius: 4px;
    border: 1px solid #f5f5f5;
    
    box-shadow: 1px 1px 3px var(--shadow);

    background-color: #ffffff;

    @media screen and (max-width: 1100px){
        margin: auto;
    }

    @media screen and (max-width: 550px){
        height: 95vh;
        max-width: 100%!important;
    }

`

export const ProgressBox = styled.div`
    display: flex;
`

export const ProgressText = styled.div`
    padding-left: 20px;
    
    display: flex;
    flex-direction: column;
    flex: 1 1;

    & > div{
        font-size: .80rem;
        color: white;
    }

    & div:first-child{
        font-size: .90rem;
        font-weight: 600;
    }
`

const activedCircle = css`
    background-color: var(--red);
    color: white;
    
    border: none;
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

    ${props => props.isActive ? activedCircle : null}

    @media screen and (max-width: 1100px){
        width: 30px;
        height: 30px;

        font-size: 1.2rem;
    }

`

export const Footer = styled.div`
    border-top: 1px solid whitesmoke;
    box-shadow: 0px -2px 2px whitesmoke;

    display: flex;
    justify-content: space-between;

    width: 100%;

    padding: 10px 60px 30px 60px;

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
    @media screen and (min-width: 1100px){
        display: none;
    }

    display: flex;
    justify-content: space-around;

    height: 40px;
    width: 300px;
    max-width: 95%;
    margin: 0px auto;
    margin-top: 10px;
`

