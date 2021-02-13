import React, {useState} from 'react'

import { 
    Formik,
} from 'formik'

import FormikField from '../../../components/FormikField'

import {
    Form,
    Wrapper,
    Title
} from "../../FormComponents.style"
import validations from '../../../schemas/salonOwner.schema'

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
