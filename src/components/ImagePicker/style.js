import styled from "styled-components"
import { PlusCircleFill, Upload } from "styled-icons/bootstrap"

export const ImagePickerBox = styled.div`
    display: flex;
    justify-content: space-around;

    & > input{
        display: none;
    }

    & > label{
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 110px;
        height: 130px;
        padding: 10px;

        cursor: pointer;

        background-color: white;

        border: 2px dashed #c7c7c7;
        border-radius: 3px;

        transition: .2s;

        & > p{
            position: absolute;
            width: 78px;
            height: 78px;
            border-radius: 50%;

            font-size: .7rem;
            color: white;
            padding: 6px;

            display: flex;
            align-items: center;
            text-align: center;

            background-color: rgba(0,0,0,0.6);
        }

        &:hover{
            border: 2px dashed #e4e3e3;

            & > p{
                color: #e4e3e3;
            }
        }
    }
`

export const Container = styled.div`
    width: auto;

    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: flex-start;
`

export const Image = styled.img`
    max-width: 80px;
    max-height: 80px;
`

export const PlusCircleIcon = styled(PlusCircleFill)`
    color: gainsboro;

    width: 80px;
    height: 80px; 

`

