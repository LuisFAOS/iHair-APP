import styled, { css } from "styled-components"
import { Visibility, VisibilityOff} from "styled-icons/material"

export const Container = styled.div`
    position: relative;
    
    width: 90%;
    height: 38px;

    border: 1px solid gainsboro;
    border-radius: 3px;

    margin: 0px 15px;
    ${props => props.iswrong && css`
        border: 1px solid var(--red);

        & > label {
            background-color: rgba(220, 53, 69, .1);
        }
    `}

    ${props => props.isFocus ? 
        css` border: 1px solid #8a8686;

            & > label {    
                color: #656565;
                background-color: white;                

                width: auto;
                
                line-height: 15px;
                padding: 0px 4px;
                margin-left: 4px;
                top: -9px;
            }`
            : 
        css` & > label {
                color: #a8a8a8;
                line-height: 35px;

                width: 100%;

                padding-left: 8px;
                top: 0px;
            }`
        }

    & ~ span{
        margin: 3px 15px;
        
        
        font-size: .7rem;
        color: var(--red);
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    & > label{
        font-size: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;

        position: absolute;
        
        transition: .2s;

        cursor: pointer;
    }

    & > input {
        height: 100%;
        width: 100%;

        font-size: 16px;
        padding-left: 8px;

        &:focus {
            outline: none;
        }
    }
`

const iconCSS = css`
    color: gray;
    background-color: none;

    cursor: pointer;
    
    height: 20px;
    width: 20px;
`

export const ShowPasswordIcon = styled(Visibility)`${iconCSS}`

export const HidePasswordIcon = styled(VisibilityOff)`${iconCSS}`
 

export const PasswordIconContainer = styled.div`
    position: absolute;
    top: 7px;
    right: 10px;

    background-color: transparent;   
`
