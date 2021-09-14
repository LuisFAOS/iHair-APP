import React from 'react'

import Image from 'next/image'
import {
    Container,
    CustomScheduleDivisionLine,
    ScheduleList,
    Wrapper,
    ButtonWrapper,
    CancelScheduleButton,
    CloseScheduleButton,
} from '../../styles/agendamentos.style'
import Card from '../../components/Card'
import Head from '../../components/Head'
import ScheduleCard from '../../components/Card/ScheduleDetailsCard'

import HandleAuthPage from '../../utils/pagesAuthHandlers/pageAuth.handler'

function Schedules(props){

    return (
        <>
            <Head title="iHair | perfil-agendamentos"/>
            <Container>
                {
                    true ? (
                        <div className="schedule-division-list">
                            <div className="schedule-division">
                                <div className="schedule-division-title">
                                    <span className="schedule-date">18/09/2021</span>
                                    <CustomScheduleDivisionLine/>
                                </div>
                                <ScheduleList>
                                    <ScheduleCard
                                        salonName="Salão cortelix"
                                        serviceName="Corte tradicional"
                                        scheduleTime="18:00"
                                        schedulePrice="19,00"
                                        scheduleStatus="PENDENTE"
                                        scheduleSalonAddress="Rua joaquim da Costa Camargo, 111"
                                        scheduleSalonNeigh="Jardim Campos Verdes"
                                    /> 
                                </ScheduleList>
                            </div>
                        </div>
                    ):(
                        <Wrapper>
                            <div>Não há agendamentos</div>
                            <Image 
                                src="/schedules/no-content.png" 
                                height={316} 
                                width={416}/>
                        </Wrapper>
                    )
                }
            </Container>
        </>
    )
}

export async function getServerSideProps(ctx){
    const possibleRedirect = HandleAuthPage(ctx, 'normalUser')

    if(possibleRedirect) return possibleRedirect

    return {props:{}}
}

export default Schedules
