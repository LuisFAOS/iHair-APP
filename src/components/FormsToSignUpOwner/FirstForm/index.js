import React, {useState, useCallback} from 'react'

import { 
    Formik,
} from 'formik'

import FormikField from '../../Fields/Formik'

import {
    Form,
    InputsWrapper,
    FormTitle
} from "../../FormComponents.style"
import validations from '../../../schemas/salonOwner.schema'

function Form1(props) {

    const [isErrorsVisible, setIsErrorsVisible] = useState(false)

    const handleSubmit = useCallback((values, errors) => {
        setIsErrorsVisible(!Object.keys(errors).length == 0) 
        
        if(Object.keys(errors).length == 0) props.handleNextForm(values, "owner")
    }, [])

    return (
        <Formik 
            initialValues={props.ownerData ? {...props.ownerData} : {email: '', complete_name: '', phone: '', password: ''}}  
            validationSchema={validations}
            validateOnMount
        >
            {({
                values,
                errors,
                touched,
                isValid
            }) => (
                <Form>
                    <FormTitle>Seus Dados: </FormTitle>
                    <InputsWrapper>
                        <div className="input-content-box">
                            <FormikField 
                                name="complete_name" 
                                inputValue={values.complete_name}
                                ErrorMessage={errors.complete_name}
                                isErrorsVisible={isErrorsVisible}
                                labelText="Nome completo"/>
                        </div>
                        <div className="input-content-box">
                            <FormikField 
                                name="phone" 
                                inputValue={values.phone}
                                ErrorMessage={errors.phone}
                                isErrorsVisible={isErrorsVisible}
                                labelText="Tel/Cel"/>
                        </div>
                    </InputsWrapper>
                    <InputsWrapper>
                        <div className="input-content-box">
                            <FormikField 
                                name="email" 
                                inputValue={values.email}
                                ErrorMessage={errors.email}
                                isErrorsVisible={isErrorsVisible}
                                labelText="Email"/>
                        </div>
                        <div className="input-content-box">
                            <FormikField 
                                name="password" 
                                inputValue={values.password}
                                ErrorMessage={errors.password}
                                isErrorsVisible={isErrorsVisible}
                                labelText="Senha"
                                isPasswordInput/>
                        </div>
                    </InputsWrapper>
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
