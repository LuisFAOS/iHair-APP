import React,{useState} from 'react';

import getCookie from '../native/cookies/getCookie'

import SalonOwnerTextDatasForm from '../components/SalonRegistrationForms/1.SalonOwnerTextDatas.form';
import SalonOwnerImgsForm from '../components/SalonRegistrationForms/2.SalonOwnerImgs.form';
import LoginForm from '../components/SalonRegistrationForms/3.Login.form';
import SalonP1Form from '../components/SalonRegistrationForms/p1.Salon.form';
import SalonLastStepsForm from '../components/SalonRegistrationForms/SalonLastSteps.form';

import { 
    Container,
    InputSide,
    ProgressSide,
    FormBox,
    Icon,
    ProgressCircle,
    ProgressText,
    Footer,
    PreviousButton,
    NextButton,
    ProgressBox,
    CheckIcon,
    CompressedProgressBar,
 } from '../styles/registrar_salao.style'
import PopUp from '../components/PopUp';
import Loading from '../components/Loading';
 

function RegisterSalon() {

    const [activedIndexForm, setActivedIndexForm] = useState(0)
    const [ownerDatas, setOwnerDatas] = useState(null)
    const [loading, setLoading] = useState(false)
    const [salonDatas, setSalonDatas] = useState({
        name: '',
        adressNumber: '', 
        contactNumber: '', 
    })
    const [popUpDatas, setPopUpDatas] = useState(null)


    const nextPageHandler = (values, type) => {
        if(type === "owner")
            setOwnerDatas({...ownerDatas, ...values})
        else if(type === "salon")
            setSalonDatas({...salonDatas, ...values})
        
        const newIndexForm = activedIndexForm+1 > 4 || activedIndexForm+1 < 0  ? activedIndexForm : activedIndexForm+1
        setActivedIndexForm(newIndexForm)
    }

    const onPopUpEvent = (iconName, message) => {
        const newState = {
            iconName,
            message
        }
        setPopUpDatas({...newState})
    }

    
    const Icons = [
        <Icon src="/registerSalon/business.png"/>,
        <Icon src="/registerSalon/add-files.png"/>,
        <Icon src="/registerSalon/email-confirmation.png"/>,
        <Icon src="/registerSalon/salon-1.png"/>,
        <Icon src="/registerSalon/salon-2.1.png"/>,
    ]

    const Forms = [
        <SalonOwnerTextDatasForm 
            ownerDatas={ownerDatas}
            nextPageHandler={nextPageHandler}/>,
        <SalonOwnerImgsForm
            ownerDatas={ownerDatas}
            onPopUpEvent={onPopUpEvent}
            setLoading={setLoading}
            nextPageHandler={nextPageHandler}/>,
        <LoginForm
            setLoading={setLoading}
            onPopUpEvent={onPopUpEvent}
            nextPageHandler={nextPageHandler}/>,
        <SalonP1Form
            salonDatas={salonDatas}
            nextPageHandler={nextPageHandler}/>,
        <SalonLastStepsForm
            setLoading={setLoading}
            onPopUpEvent={onPopUpEvent}
            salonDatas={salonDatas}
            nextPageHandler={nextPageHandler}/>,
    ]


    return (
        <Container>
            {
                popUpDatas &&
                <PopUp
                    iconName={popUpDatas.iconName}
                    message={popUpDatas.message}
                    setPopUpDatas={setPopUpDatas}
                />
            }
            <InputSide>
                <div>
                    <FormBox>
                        <CompressedProgressBar>
                            <ProgressCircle isActive={activedIndexForm >= 0}>
                                {activedIndexForm > 0 ? <CheckIcon/> : "1"}
                            </ProgressCircle>
                            <ProgressCircle isActive={activedIndexForm >= 1}>
                                {activedIndexForm > 1 ? <CheckIcon/> : "2"}
                            </ProgressCircle>
                            <ProgressCircle isActive={activedIndexForm >= 2}>
                                {activedIndexForm > 2 ? <CheckIcon/> : "3"}
                            </ProgressCircle>
                            <ProgressCircle isActive={activedIndexForm >= 3}>
                                {activedIndexForm > 3 ? <CheckIcon/> : "4"}
                            </ProgressCircle>
                            <ProgressCircle isActive={activedIndexForm >= 4}>
                                {activedIndexForm > 4 ? <CheckIcon/> : "5"}
                            </ProgressCircle>
                        </CompressedProgressBar>
                        {Icons[activedIndexForm]}
                        {Forms[activedIndexForm]}                   

                        <Footer>
                            <PreviousButton
                                disabled={activedIndexForm == 2 || (activedIndexForm == 3 && getCookie('authToken'))} 
                                onClick={() => {
                                    if(activedIndexForm == 0){
                                        onPopUpEvent("doneIcon", "Caso não tenha uma conta, atualize a página.")
                                        setActivedIndexForm(2)
                                        return
                                    }else if(activedIndexForm == 2 || (activedIndexForm == 3 && getCookie('authToken'))){
                                        return
                                    }

                                    const newIndexForm = activedIndexForm-1 < 0  ? activedIndexForm : activedIndexForm-1
                                    setActivedIndexForm(newIndexForm)                            
                                }}>
                                {activedIndexForm == 0 ? "Pular p/ Login" : "Anterior"}
                            </PreviousButton>
                            
                            <NextButton onClick={() => {
                                    const newIndexForm = activedIndexForm+1 > 5 ? activedIndexForm : activedIndexForm+1
                                    document.getElementById(`btn-form${newIndexForm}`).click()
                                }} 
                                type="button">

                                {loading ? <Loading size="small"/> 
                                            : 
                                            activedIndexForm > 3 ? "Concluir" : "Próximo"                                   
                                }

                            </NextButton>
                        </Footer>
                    </FormBox>
                </div>
            </InputSide>

            <ProgressSide>
                <div>
                    <ProgressBox>
                        <ProgressCircle isActive={activedIndexForm >= 0}>
                            {activedIndexForm > 0 ? <CheckIcon/> : "1"}
                        </ProgressCircle>
                        <ProgressText>
                            <div>
                                Insira os dados do PROPRIETÁRIO.
                            </div>
                            <div>
                                Nessa primeira etapa é inserido dados referente ao
                                dono do salão.
                            </div>
                        </ProgressText>
                    </ProgressBox>
                    <ProgressBox>
                        <ProgressCircle isActive={activedIndexForm >= 1}>
                            {activedIndexForm > 1 ? <CheckIcon/> : "2"}
                        </ProgressCircle>
                        <ProgressText>
                            <div>
                                Enviar de imagens.
                            </div>
                            <div>
                                Finalizando o cadastro do proprietário basta enviar
                                algumas imagens.
                            </div>
                        </ProgressText>
                    </ProgressBox>
                    <ProgressBox>
                        <ProgressCircle isActive={activedIndexForm >= 2}>
                            {activedIndexForm > 2 ? <CheckIcon/> : "3"}
                        </ProgressCircle>
                        <ProgressText>
                            <div>
                                Confirme seu email e logue-se.
                            </div>
                            <div>
                                Vá até sua caixa de email e confirme-o,<br/>
                                após isso, preencha os campos!!
                            </div>
                        </ProgressText>
                    </ProgressBox>
                    <ProgressBox>
                        <ProgressCircle isActive={activedIndexForm >= 3}>
                            {activedIndexForm > 3 ? <CheckIcon/> : "4"}
                        </ProgressCircle>
                        <ProgressText>
                            <div>
                                Insira os dados do SALÃO.
                            </div>
                            <div>
                                Os dados inseridos aqui servirá, também, para validação.
                            </div>
                        </ProgressText>
                    </ProgressBox>
                    <ProgressBox>
                        <ProgressCircle isActive={activedIndexForm >= 4}>
                            {activedIndexForm > 4 ? <CheckIcon/> : "5"}
                        </ProgressCircle>
                        <ProgressText>
                            <div>
                                Ultimos passos.
                            </div>
                            <div>
                                Agora basta inserir os ultimos dados do seu salão e pronto, cadastro finalizado. 
                            </div>
                        </ProgressText>
                    </ProgressBox>
                </div>
            </ProgressSide>
        </Container>
    );
}

export default RegisterSalon;