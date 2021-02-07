import styled from "styled-components"


export const Button = styled.button`
    font-size: 17px;

    padding: 8px;

    border: 1px solid var(--red);
    border-radius: 2px;

    cursor: pointer;
    transition: .2s;

    &:focus{
        outline: none;

        box-shadow: 0 0 0 0.25rem rgba(220, 50, 69, 0.4);
    }

    &:disabled{
        border: 1px solid rgba(220, 50, 69, 0.3);
        
        cursor: auto;
    }
`