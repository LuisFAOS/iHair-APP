import React, {useState, useEffect} from 'react'

import { 
    Formik,
} from 'formik'
import cepPromise from "cep-promise"
import {
     cnpj
} from "cpf-cnpj-validator"

import FormikField from '../../FormikField'
import TextInput from '../../TextInput'
import {
    Form,
    Wrapper,
    Title
} from "../../FormComponents.style"
import { AddressContainer } from './style'
import validations from '../../../schemas/salon.schema'



function Form4(props) {

    useEffect(() => {
        setOtherSalonDatas({
            cnpj: {
                value: props.salonDatas.cnpj || '',
                error: props.salonDatas.cnpj ? '' : 'CNPJ inválido.'
            },
            CEP: {
                value: props.salonDatas.CEP || '',
                error: props.salonDatas.CEP ? '' : 'CEP inválido.'
            }
        })
    }, [props.salonDatas.CEP, props.salonDatas.cnpj])

    const [showErrors, setShowErrors] = useState(false)

    const [otherSalonDatas, setOtherSalonDatas] = useState({
        cnpj: {
            value: '',
            error: 'CNPJ inválido'
        },
        CEP: {
            value: '',
            error: 'CEP inválido.'
        }
    })

    const handleSubmit = async (values, errors) => {   
        await validationHandler(otherSalonDatas.CEP.value, 'cep')
        
        setShowErrors(!Object.keys(errors).length == 0 || otherSalonDatas.CEP.error || otherSalonDatas.cnpj.error) 
        
        if(Object.keys(errors).length == 0 && !otherSalonDatas.CEP.error && !otherSalonDatas.cnpj.error)
            props.nextPageHandler(values, "salon")
    }

    const validationHandler = async (value, field) => {
        try {
            if(field === "cnpj"){
                const isValidCNPJ = await cnpj.isValid(value)
                if(!isValidCNPJ){
                    const newState={...otherSalonDatas}
                    newState.cnpj.error = 'CNPJ inválido.'
                    setOtherSalonDatas({...newState})
                }
            }else if(field === "cep"){
                await cepPromise(value)
            }
        } catch (error) {
            const newState={...otherSalonDatas}
            newState.CEP.error = 'CEP inválido.'
            setOtherSalonDatas({...newState})
        }
    }


    const handleInputChange = (value, field) => {
        const newState={...otherSalonDatas}
        newState[field].error = ''
        newState[field].value = value
        setOtherSalonDatas({...newState})
    } 

    const {
        name,
        addressNumber, 
        contactNumber, 
    } = props.salonDatas

    return (
        <Formik 
            initialValues={{
                name: name || '',
                addressNumber: addressNumber || '', 
                contactNumber: contactNumber || '', 
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
                    <Title>Dados do salão: </Title>
                    <Wrapper>
                        <div className="form-group">
                            <FormikField 
                                name="name" 
                                inputValue={values.name}
                                ErrorMessage={errors.name}
                                showErrors={showErrors}
                                labelText="Nome"/>
                        </div>
                        <div className="form-group">
                            <AddressContainer>
                                <div>
                                    <FormikField 
                                        name="addressNumber" 
                                        inputValue={values.addressNumber}
                                        ErrorMessage={errors.addressNumber}
                                        showErrors={showErrors}
                                        labelText="Nº do endereço"/>
                                </div>

                                <div>
                                    <TextInput 
                                        name="CEP" 
                                        inputValue={otherSalonDatas.CEP.value}
                                        ErrorMessage={otherSalonDatas.CEP.error}
                                        changed={handleInputChange}
                                        blured={validationHandler}
                                        showErrors={showErrors}
                                        labelText="CEP"/>
                                </div>
                            </AddressContainer>
                        </div>
                    </Wrapper>
                    <Wrapper>
                        <div className="form-group">
                            <FormikField 
                                name="contactNumber" 
                                inputValue={values.contactNumber}
                                ErrorMessage={errors.contactNumber}
                                showErrors={showErrors}
                                labelText="Tel/Cel de contato"/>
                        </div>
                        <div className="form-group">
                            <TextInput 
                                name="cnpj" 
                                inputValue={otherSalonDatas.cnpj.value}
                                ErrorMessage={otherSalonDatas.cnpj.error}
                                changed={handleInputChange}
                                blured={validationHandler}
                                showErrors={showErrors}
                                labelText="CNPJ"/>
                        </div>
                    </Wrapper>
                    <button 
                        id="btn-form4" 
                        onClick={() => handleSubmit({
                            ...values, 
                            CEP: otherSalonDatas.CEP.value,
                            cnpj: otherSalonDatas.cnpj.value, 
                        }, errors)}
                        type="button"></button>
                </Form>
            )}
        </Formik>
    )
}

export default Form4
