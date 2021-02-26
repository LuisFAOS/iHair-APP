import React from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    ImageBox,
    CardImage,
    TextDatas,
    Title,
} from './style'

function Card(props) {

    return (
        <Container>
            <ImageBox>
                <CardImage
                    src="/logo.png"
                    height={85}
                    width={85}
                />
            </ImageBox>
            <TextDatas>
                <Title>
                    {props.title}
                </Title>
                {props.children}
            </TextDatas>
        </Container>
    )
}

Card.propTypes = {
    childre: PropTypes.element,
    title: PropTypes.string,
    src: PropTypes.string,
}

export default Card
