import { useState } from 'react'

import PropTypes from 'prop-types'

import {
    Container,
    SalonDetails,
    ImageCard,
    PlusButton,
    ScheduleMoreDetails,
    KeyDownIcon,
    KeyUpIcon,
    ClockIcon,
    CoinIcon,
    LocationIcon,
    OpenChatButton,
} from './style'

function ScheduleDetailsCard({salonName, serviceName, scheduleTime, schedulePrice, scheduleStatus, scheduleSalonAddress, scheduleSalonNeigh}){
    const [isSeeingMoreDetails, setIsSeeingMoreDetails] = useState(false)

    return (
        <Container isSeeingMoreDetails={isSeeingMoreDetails}>
            <SalonDetails scheduleStatus={scheduleStatus}>
                <picture className="salon-image-card-schedule">
                    <ImageCard 
                        height={50}
                        width={50}
                        src="/logo.png"/>
                </picture>
                <div className="salon-name-and-status-wrapper">
                    <span className="salon-name">{salonName}</span>
                    <span className="schedule-status">{scheduleStatus}</span>
                </div>
            </SalonDetails>
            <div className="schedule-service-name">Serviço: {serviceName}</div>
            <PlusButton onClick={() => setIsSeeingMoreDetails(prevState => !prevState)}>
                {!isSeeingMoreDetails ? <KeyDownIcon/> : <KeyUpIcon/>}
            </PlusButton>
            { isSeeingMoreDetails &&
                <ScheduleMoreDetails>
                    <div className="schedule-more-details-first-line">
                        <span className="schedule-time"><ClockIcon/> {scheduleTime}hrs</span>
                        <span className="schedule-price"><CoinIcon/> R$ {schedulePrice}</span>
                    </div>
                    <span className="schedule-salon-location">
                        <LocationIcon/> {scheduleSalonAddress} <br/>
                        <span className="schedule-salon-neighborhood">{scheduleSalonNeigh}</span>
                    </span>
                    <OpenChatButton>Abrir Chat</OpenChatButton>
                </ScheduleMoreDetails>
            }
        </Container>    
    )
}

ScheduleDetailsCard.propTypes = {
    salonName: PropTypes.string.isRequired,
    serviceName: PropTypes.string.isRequired,
    scheduleTime: PropTypes.string.isRequired, 
    schedulePrice: PropTypes.string.isRequired, 
    scheduleStatus: PropTypes.string.isRequired,
    scheduleSalonNeigh: PropTypes.string.isRequired,
    scheduleSalonAddress: PropTypes.string.isRequired,
}

export default ScheduleDetailsCard
