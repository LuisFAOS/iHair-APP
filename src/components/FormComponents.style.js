import { Form as FormikForm } from 'formik'
import styled from 'styled-components'

export const InputsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 15px 0px;

    & > div.input-content-box{
        display: flex;
        flex-direction: column;

        height: 55px;
        width: 48%;
    }

    @media screen and (max-width: 500px){
        flex-direction: column;

        & > div.input-content-box{
            width: 100%; 
        }

        & > :first-child{
            margin-bottom: 12px;
        }
    }
`

export const Form = styled(FormikForm)`
    width: 100%;

    padding: 5px 40px;

    & > button#btn-form1{
        background: none;
        display: none;
    }

    @media screen and (max-width: 620px){
        padding: 5px 20px;
    }

    @media screen and (max-width: 500px){
        padding: 5px 25px;
    }
`

export const FormTitle = styled.h2`
    padding: 0px 15px 15px 15px;

    font-size: 1.7rem;
    font-weight: 300;

    @media screen and (max-width: 500px){
        font-size: 1.5rem;
    }
`


