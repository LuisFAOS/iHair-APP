import styled from 'styled-components'

export const Container = styled.div`
    position: relative;

    & > label{
        position: absolute;
        top: -9px;
        left: 5px;
        font-size: 15px;
        color: gray;

        background-color: white;
    }
`

export const TextArea = styled.textarea`
    width: 300px;
    height: 100px;

    resize: none;

    max-width: 100%;

    border: 1px solid gainsboro;
    border-radius: 3px;

    padding-left: 5px;
    padding-top: 10px;

    font-size: 17px;

    &:focus{
        outline: none;
    }
`