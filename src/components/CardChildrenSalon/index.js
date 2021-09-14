import React from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    Wrapper,
    SalonRate,
    RateIcon,
    DistanceToUserHome,
} from './style'

function Card(props) {

    return (
        <Container>
            <Wrapper>
                <div className="rate-box">
                    <RateIcon/> {props.rate}
                </div>
                <span className="service-type">
                    • {props.typeService}
                </span>
                <span className="distance-between-salon-and-user">
                    • {props.distanceToUserHome}km
                </span>
            </Wrapper>
            <Wrapper>
                <span className="waiting-time">
                    Espera: {props.waitingTime}min
                </span>
            </Wrapper>
        </Container>
    )
}

Card.propTypes = {
    rate: PropTypes.number.isRequired,
    typeService: PropTypes.string.isRequired,
    distanceToUserHome: PropTypes.number.isRequired,
    waitingTime: PropTypes.number.isRequired,
}

export default Card
