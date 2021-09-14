import styled, { css } from "styled-components"
import { Check, Exclamation } from "styled-icons/bootstrap"
import { Close, Done } from "styled-icons/material"

import { Button } from '../Button.style'

const ContainerBackgroundColorsMap = {
    'warning': css`background-color: var(--red);`,
    'question': css`background-color: var(--blue);`,
    'success': css`background-color: var(--green);`
}

export const Container = styled.div`
    display: flex;
    
    width:  290px;
    max-width: 100%;

    position: fixed;
    top: 10px;
    z-index: 9999999;
   
    ${props => ContainerBackgroundColorsMap[props.type]}

    border-radius: 2px 0px 0px 2px;
    ${ props => props.type === 'question' ? 
        css`
            height: 105px;        
    
            right: 0px;
    
            flex-direction: column;
            align-items: center;

            animation-name: openPopUp;
            animation-duration: .4s;
            animation-timing-funtion: easy;
            
            @keyframes openPopUp {
                0% {right: -200px;}
                100% {right: 0px;}
            }  
        `
        :
        css` 
            height: 80px;
        
            right: -280px;
            
            animation-name: closePopUp;
            animation-duration: 6s;
            animation-timing-funtion: easy;

            @keyframes closePopUp {
    	        0% {right: -200px;}
	        3% {right: 0px;}
	        98% {right: 0px;}
	        100% {right: -280px;}
            }
    `}
`


export const ClosePopUpBox = styled.div`
    width: 65px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 1px solid white;
`

export const CloseIcon = styled(Close)`
    width: 30px;
    height: 30px;

    color: white;
    
    cursor: pointer;
`

export const Description = styled.p`
    padding: 3px 10px;
    height: 100%;    
    width: 215px;

    display: flex;
    align-items: center;

    color: white;
    text-align: center;
    font-size: .9rem;
    font-weight: 300;
`

export const WrapperButtons = styled.div`
    width: 100%;    

    display: flex;
    justify-content: space-evenly;

    padding: 0px 5px 10px 5px;
`

export const YesButton = styled(Button)`
    color: white;
    font-size: .85rem;

    margin: 0px 5px;
    min-width: 40%;    

    border: 1px solid #1e7e34;
`

export const NoButton = styled(Button)`
    color: white;
    font-size: .85rem;

    margin: 0px 5px;
    min-width: 40%;
`
