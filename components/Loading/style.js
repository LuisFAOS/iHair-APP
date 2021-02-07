import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center; 
    ${
        props => css`
            width: ${props.width}px;
            height: ${props.height}px;
        `
    }
`