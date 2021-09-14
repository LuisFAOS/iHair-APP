import React,{useState, useMemo, useCallback} from 'react';

import { useRouter } from 'next/router'

import getCookie from '../utils/cookies/getCookie'

import Head from '../components/Head'
import {
    FirstForm, 
    SecondForm,
    ConclusionForm,
} from '../components/FormsToSignUpOwner';
import PopUp from '../components/PopUp';
import Spinner from '../components/Spinner';
import HandleUnAuthPage from '../utils/pagesAuthHandlers/pageUnAuth.handler'

import { 
    Container,
    InputSide,
    ProgressSide,
    FormBox,
    HeadImg,
    ProgressCircle,
    FormFooter,
    PreviousButton,
    NextButton,
    ProgressBox,
    CheckIcon,
    CompressedProgressBar,
 } from '../styles/registrar-proprietario.style'


function RegisterSalon() {

    const [activedIndexForm, setActivedIndexForm] = useState(0) // [0-2]
    const [ownerData, setOwnerData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [popUpProps, setPopUpProps] = useState(null)

    const router = useRouter()

    const handleNextForm = (values, type) => {
        setOwnerData((prevOwnerDataState) => {
            return {...prevOwnerDataState, ...values}
        })

        const newIndexForm = activedIndexForm+1 > 2  ? activedIndexForm : activedIndexForm+1
        setActivedIndexForm(newIndexForm)
    }

    const handlePreviousForm = () => {
        if(activedIndexForm == 0) return router.push('/login')
        
        if(activedIndexForm == 2) return

        const newIndexForm = activedIndexForm-1 < 0  ? activedIndexForm : activedIndexForm-1
        setActivedIndexForm(newIndexForm)
    }

    const onPopUpEvent = useCallback((type, message, errorAmount) => {
        setPopUpProps({type, message})
    }, [])

    const Forms = [
        <FirstForm 
            ownerData={ownerData}
            handleNextForm={handleNextForm}/>,
        <SecondForm
            ownerData={ownerData}
            setOwnerData={setOwnerData}
            onPopUpEvent={onPopUpEvent}
            setIsLoading={setIsLoading}
            handleNextForm={handleNextForm}/>,
        <ConclusionForm/>,
    ]

    return (
        <Container>
            <Head title="iHair | registrar-proprietário"/>
            {
                popUpProps &&
                    <PopUp
                        type={popUpProps.type}
                        message={popUpProps.message}
                        setPopUpProps={setPopUpProps}
                    />
            }
            <InputSide>
                <FormBox>
                    <CompressedProgressBar>
                        {
                            Forms.map((value, index) => {
                                return (
                                    <ProgressCircle key={index} isActive={activedIndexForm >= index}>
                                        {activedIndexForm > index ? <CheckIcon/>: index+1}
                                    </ProgressCircle>
                                )
                            })
                        }
                    </CompressedProgressBar>

                    <HeadImg src={`/registerOwner/owner-form-img${activedIndexForm+1}.png`} isNotResized={activedIndexForm === 2}/>
 
                    {Forms[activedIndexForm]}                   
    
                    <FormFooter>
                        <PreviousButton disabled={activedIndexForm == 2} onClick={handlePreviousForm}>
                            {activedIndexForm == 0 ? "Ir p/ Login" : "Anterior"}
                        </PreviousButton>
                            
                        <NextButton onClick={() => {
                                const newIndexForm = activedIndexForm+1 > 3 ? activedIndexForm : activedIndexForm+1
                                document.getElementById(`btn-form${newIndexForm}`).click()
                            }} 
                            type="button"
                        >
                            {isLoading ? <Spinner size="small"/> : activedIndexForm >= 2 ? "Concluir" : "Próximo"}
                        </NextButton>
                    </FormFooter>
                </FormBox>
            </InputSide>
            <ProgressSide>
                <div className="wrapper-progressBox">
                {
                    Forms.map((value, index) => {
                        return (
                            <ProgressBox key={index}>
                                <ProgressCircle isActive={activedIndexForm >= index}>
                                    {activedIndexForm > index ? <CheckIcon/>: index+1}
                                </ProgressCircle>
                            </ProgressBox>
                        )
                    })
                }
                </div>
            </ProgressSide>
        </Container>
    );
}

export async function getServerSideProps(ctx){
    const possibleRedirect = HandleUnAuthPage(ctx)

    const returnValue = possibleRedirect ? possibleRedirect : {props: {}}
    return returnValue
}

export default RegisterSalon
