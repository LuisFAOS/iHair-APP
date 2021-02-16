import styled from "styled-components"
import { Upload } from "styled-icons/bootstrap"

export const ImagePickerBox = styled.div`
    margin-top: 10px;

    display: flex;
    justify-content: space-around;

    & > input{
        display: none;
    }

    & > label{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        width: 210px;
        height: 60px;
        padding: 10px;

        cursor: pointer;

        background-color: white;

        border: 2px dashed #c7c7c7;
        border-radius: 3px;

        transition: .2s;

        & > :first-child{
            width: 200px;

            text-align: center;
            line-height: 16px;
            padding: 0px 8px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &:hover{
            border: 2px dashed #e4e3e3;
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
    margin-top: 10px;

    max-width: 100px;
    max-height: 40px;
`

export const UploadIcon = styled(Upload)`
    color: gray;

    width: 16px;
    height: 16px;
    margin-top: 3px;
`

