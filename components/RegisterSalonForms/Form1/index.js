import React, {useState} from 'react'

import { 
    Formik,
} from 'formik'
import * as Yup from "yup"

import FormikField from '../../../components/FormikField'

import {
    Form,
    Wrapper,
    Title
} from "../../FormComponents.style"


const validations = Yup.object().shape({
    completeName: Yup.string("O nome completo deve ser uma string.")
        .trim()
        .min(5, "Nome completo muito curto.")
        .max(100, "Nome completo muito longo.")
        .required("Nome completo é obrigatório."),
        
    phone: Yup.string("O Tel/Cel deve ser uma string.")
        .trim()
        .matches("^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$",
        "Tel/cel está inválido.")
        .required("Tel/cel é obrigatório."),

    email: Yup.string("O email deve ser do tipo string.")
        .trim()
        .email("Formato do email inválido.")
        .min(7, "Email muito curto.")
        .max(150, "Email muito longo, tente outro.")
        .required("Email é obrigatório."),

    password: Yup.string("A senha deve ser do tipo string.")
        .trim()
        .min(8, "Senha muito curta.")
        .max(150, "Senha muito longa, tente uma menor.")
        .required("Senha é obrigatória."),
})

function Form1(props) {

    const [showErrors, setShowErrors] = useState(false)

    const handleSubmit = (values, errors) => {
        setShowErrors(!Object.keys(errors).length == 0) 
        
        if(Object.keys(errors).length == 0)
            props.nextPageHandler(values, "owner")
    }

    return (
        <Formik 
            initialValues={props.ownerDatas ? {...props.ownerDatas} : {email: '', completeName: '', phone: '', password: ''}}  
            validationSchema={validations}
            validateOnMount>
            {({
                values,
                errors,
                touched,
                isValid
                /* and other goodies */
            }) => (
                <Form>
                    <Title>Seus Dados: </Title>
                    <Wrapper>
                        <div className="form-group">
                            <FormikField 
                                name="completeName" 
                                inputValue={values.completeName}
                                ErrorMessage={errors.completeName}
                                showErrors={showErrors}
                                labelText="Nome completo"/>
                        </div>
                        <div className="form-group">
                            <FormikField 
                                name="phone" 
                                inputValue={values.phone}
                                ErrorMessage={errors.phone}
                                showErrors={showErrors}
                                labelText="Tel/Cel"/>
                        </div>
                    </Wrapper>
                    <Wrapper>
                        <div className="form-group">
                            <FormikField 
                                name="email" 
                                inputValue={values.email}
                                ErrorMessage={errors.email}
                                showErrors={showErrors}
                                labelText="Email"/>
                        </div>
                        <div className="form-group">
                            <FormikField 
                                name="password" 
                                inputValue={values.password}
                                ErrorMessage={errors.password}
                                showErrors={showErrors}
                                labelText="Senha"
                                isPassword/>
                        </div>
                    </Wrapper>
                    <button 
                        id="btn-form1" 
                        onClick={() => handleSubmit(values, errors)}
                        type="button"></button>
                </Form>
            )}
        </Formik>
    )
}

export default Form1
