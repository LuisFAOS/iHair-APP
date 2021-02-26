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
                <span>
                    • {props.typeService}
                </span>
                <span>
                    • {props.distanceToUserHome}km
                </span>
            </Wrapper>
            <Wrapper>
                <span>
                    Atendimento em: {props.waitingTime}min
                </span>
            </Wrapper>
        </Container>
    )
}

Card.propTypes = {
    rate: PropTypes.number,
    typeService: PropTypes.string,
    distanceToUserHome: PropTypes.number,
    waitingTime: PropTypes.number,
}

export default Card
