import React from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    ImageBox,
    CardImage,
    DetailsBox,
    Title,
} from './style'

function Card(props) {

    return (
        <Container isClickable={props.isClickable}>
            <ImageBox>
                <CardImage
                    layout="fill"
                    src="/logo.png"
                    className="image"
                />
            </ImageBox>
            <DetailsBox>
                <Title>
                    {props.title}
                </Title>
                {props.children}
            </DetailsBox>
        </Container>
    )
}

Card.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string,
    isClickable: PropTypes.bool,
}

export default Card
