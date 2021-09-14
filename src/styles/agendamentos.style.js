import styled, { css } from 'styled-components'
import { Button } from '../components/Button.style'

export const Container = styled.div`
    padding-top: 80px;
    height: 100vh;

    & > div.schedule-division-list{
        @media screen and (max-width: 900px){
            margin-bottom: 80px;
        }
        padding: 40px;
    }

    & > div > div > div.schedule-division-title{
        display: flex;
        align-items: center;
    }

    & div.schedule-division-title > span{
        font-weight: 300;
    }

    @media screen and (max-width: 900px){
        padding-top: 180px;
    }

    @media screen and (max-width: 470px){
        & > div.schedule-division-list{
            padding: 20px 10px;
        }
    }
`

export const CustomScheduleDivisionLine = styled.hr`
    flex-grow: 1;

    height: 1px;
    margin: 0px 10px;

    border-radius: 2px;
    background-color: var(--whiteborder);
`

export const ScheduleList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 1280px){
        & > div{
            width: 45%;
        }
    }
    
    @media screen and (max-width: 895px){
        & > div{
            width: 100%;
        }
    }

    & > div{
        margin: 10px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    
    & > :first-child{
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
`

export const ButtonWrapper = styled.div`
    padding-top: 5px;

    display: flex;
    justify-content: space-between;
`

export const CancelScheduleButton = styled(Button)`
    padding: 3px 12px;
    padding-top: 0px;

    color: black;
`
export const CloseScheduleButton = styled(Button)`
    padding: 3px 12px;
    padding-top: 0px;

    background-color: var(--green);
    border: var(--green);

    color: white;

    &:focus{
        outline: none;

        box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.4);
    }

    &:disabled{
        border: 1px solid rgba(25, 135, 84, 0.3);
        
        cursor: auto;
    }
`
