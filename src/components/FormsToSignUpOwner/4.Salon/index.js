import React, {useState, useEffect, useCallback} from 'react'

import { 
    Formik,
} from 'formik'
import cepPromise from "cep-promise"
import {
     cnpj
} from "cpf-cnpj-validator"

import FormikField from '../../Fields/Formik'
import TextInput from '../../Fields/Text'
import {
    Form,
    InputsWrapper,
    FormTitle
} from "../../FormComponents.style"
import { AddressContainer } from './style'
import validations from '../../../schemas/salon.schema'


function Form4(props) {

    useEffect(() => {
        setApiValidationSalonData({
            CNPJ: {
                value: props.salonData.CNPJ || '',
                error: ''
            },
            CEP: {
                value: props.salonData.CEP || '',
                error: ''
            }
        })
    }, [props.salonData.CEP, props.salonData.CNPJ])

    const [isErrorsVisible, setIsErrorsVisible] = useState(false)

    const [apiValidationSalonData, setApiValidationSalonData] = useState({
        CNPJ: {
            value: '',
            error: ''
        },
        CEP: {
            value: '',
            error: ''
        }
    })

    const handleSubmit = async (values, errors) => {   
        await handleCEPandCNPJvalidation(apiValidationSalonData.CEP.value, 'CEP')
        await handleCEPandCNPJvalidation(apiValidationSalonData.CNPJ.value, 'CNPJ')

        setIsErrorsVisible(!Object.keys(errors).length == 0 || apiValidationSalonData.CEP.error || apiValidationSalonData.CNPJ.error) 
        
        if(Object.keys(errors).length == 0 && !apiValidationSalonData.CEP.error && !apiValidationSalonData.CNPJ.error)
            props.handleNextForm(values, "salon")
    }

    const handleCEPandCNPJvalidation = useCallback(async (value, field) => {
        try {
            if(field === "CNPJ"){
                const isValidCNPJ = await cnpj.isValid(value)
                if(!isValidCNPJ){
                    setApiValidationSalonData(prevState => {
                        prevState.CNPJ.error = 'CNPJ inválido.'
                        return {...prevState}
                    })   
                }
            }else if(field === "CEP"){
                const CEPvalueTrimmedLength = value.trim().length
                if(CEPvalueTrimmedLength > 7 && CEPvalueTrimmedLength < 10) throw Error('CEP inválido')
                
                await cepPromise(value)
            }
        } catch (error) {
            setApiValidationSalonData(prevState => {
                prevState.CEP.error = 'CEP inválido.'
                return {...prevState}
            })
        }
    }, [])


    const handleInputChange = useCallback((value, field) => {
        setApiValidationSalonData(prevState => {
            return {
                ...prevState, 
                [field]: { error: '', value }
            }
        })
    }, []) 

    const {
        name,
        address_number, 
        contact_phone, 
    } = props.salonData

    return (
        <Formik 
            initialValues={{
                name: name || '',
                address_number: address_number || '', 
                contact_phone: contact_phone || '', 
            }}  
            validationSchema={validations}
            validateOnMount>
            {({
                values,
                errors,
                touched,
                isValid
            }) => (
                <Form>
                    <FormTitle>Dados do salão: </FormTitle>
                    <InputsWrapper>
                        <div className="input-content-box">
                            <FormikField 
                                name="name" 
                                inputValue={values.name}
                                ErrorMessage={errors.name}
                                isErrorsVisible={isErrorsVisible}
                                labelText="Nome"/>
                        </div>
                        <div className="input-content-box">
                            <AddressContainer>
                                <div className="single-content-wrapper">
                                    <FormikField 
                                        name="address_number" 
                                        inputValue={values.address_number}
                                        ErrorMessage={errors.address_number}
                                        isErrorsVisible={isErrorsVisible}
                                        labelText="Nº do end."/>
                                </div>

                                <div className="single-content-wrapper">
                                    <TextInput 
                                        name="CEP" 
                                        inputValue={apiValidationSalonData.CEP.value}
                                        ErrorMessage={apiValidationSalonData.CEP.error}
                                        changed={handleInputChange}
                                        blured={handleCEPandCNPJvalidation}
                                        isErrorsVisible={isErrorsVisible}
                                        labelText="CEP"/>
                                </div>
                            </AddressContainer>
                        </div>
                    </InputsWrapper>
                    <InputsWrapper>
                        <div className="input-content-box">
                            <FormikField 
                                name="contact_phone" 
                                inputValue={values.contact_phone}
                                ErrorMessage={errors.contact_phone}
                                isErrorsVisible={isErrorsVisible}
                                labelText="Tel/Cel de contato"/>
                        </div>
                        <div className="input-content-box">
                            <TextInput 
                                name="CNPJ" 
                                inputValue={apiValidationSalonData.CNPJ.value}
                                ErrorMessage={apiValidationSalonData.CNPJ.error}
                                changed={handleInputChange}
                                blured={handleCEPandCNPJvalidation}
                                isErrorsVisible={isErrorsVisible}
                                labelText="CNPJ"/>
                        </div>
                    </InputsWrapper>
                    <button 
                        id="btn-form4" 
                        onClick={() => handleSubmit({
                            ...values, 
                            CEP: apiValidationSalonData.CEP.value,
                            CNPJ: apiValidationSalonData.CNPJ.value, 
                        }, errors)}
                        type="button"></button>
                </Form>
            )}
        </Formik>
    )
}

export default Form4
