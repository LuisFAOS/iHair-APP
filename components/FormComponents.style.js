import { Form as FormikForm } from 'formik'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 15px 0px;

    & > div.form-group{
        display: flex;
        flex-direction: column;

        height: 55px;
        width: 48%;
    }

    @media screen and (max-width: 550px){
        flex-direction: column;

        & > div.form-group{
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

    @media screen and (max-width: 400px){
        padding: 5px 10px;
    }
`

export const Title = styled.div`
    padding: 0px 15px 15px 15px;

    font-size: 22px;
    
`