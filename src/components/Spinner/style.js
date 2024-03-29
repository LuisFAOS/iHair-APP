import styled, { css } from 'styled-components'

const loadingSize = {
    large: css`
        width: 80px;
        height: 80px;
        
        & div{
            width: 64px;
            height: 64px;
            margin: 8px;
            
            border: 8px solid white;
        }
    `,

    small: css`
        width: 32px;
        height: 32px;

        & div{
            width: 25px;
            height: 25px;
            margin: 3px;

            border: 3px solid white;
        }
    `
}

export const Container = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 

    ${props => props.size === 'small' ? css`
        width: 80px;
        height: 20px;
    ` : css`
        width: 100%;
    `}

    .lds-ring {
        display: inline-block;
        position: relative;

        ${props => loadingSize[props.size]}
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;

        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.color ? props.color : "#fff"} transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`