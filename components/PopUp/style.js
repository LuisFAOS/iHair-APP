import styled, { css } from "styled-components"
import { Check, Exclamation } from "styled-icons/bootstrap"
import { Close, Done } from "styled-icons/material"


export const Container = styled.div`
    width:  320px;
    height: 100px;

    position: fixed;
    right: 0px;
    top: 10px;

    background-color: white;
    border: 1px solid #cecece;
    border-radius: 2px 0px 0px 2px;

    display: flex;

    z-index: 999;
`


export const ClosePopUp = styled.div`
    width: 70px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 1px solid #cecece;
`

export const CloseIcon = styled(Close)`
    width: 40px;
    height: 40px;

    color: #cecece;
    
    cursor: pointer;
`


export const TextWrapper = styled.div`
    width: 250px;
    height: 100%;
`


export const Header = styled.div`
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const iconCSS = css`
    width: 40px;
    height: 40px;
`

export const WarningIcon = styled(Exclamation)`
    ${iconCSS}

    color: var(--red);
`

export const DoneIcon = styled(Check)`
    ${iconCSS}

    color: green;
`

export const Description = styled.p`
    padding: 3px 10px;
    height: 60px;
    display: flex;
    text-align: center;
    font-size: 13px;
`

