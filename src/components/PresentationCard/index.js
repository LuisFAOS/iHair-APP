
import PropTypes from 'prop-types'

import { Card } from './style'

function PresentationCard({title, iconComponent, description}){
    return (
        <Card>
            <span className="card-title">
                {title}
            </span>
            <div className="card-icon-box">
                <svg viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#DC3545" d="M35.8,-45.1C48.2,-40.3,61.4,-32.2,67.3,-20.4C73.3,-8.5,72,7.3,64.2,17.5C56.3,27.8,41.7,32.6,29.9,43.9C18.1,55.3,9.1,73.1,-2.8,76.9C-14.6,80.7,-29.2,70.5,-38.6,58.4C-48.1,46.3,-52.4,32.4,-52.5,19.9C-52.6,7.5,-48.4,-3.4,-42.5,-11.4C-36.6,-19.4,-29,-24.5,-21.7,-30.9C-14.3,-37.4,-7.1,-45.3,2.3,-48.4C11.7,-51.5,23.4,-49.9,35.8,-45.1Z" transform="translate(70 70)" />
                </svg>
                {iconComponent}
            </div>
            <p className="card-description">
                {description}
            </p>
        </Card>
    )
}

PresentationCard.propTypes = {
    title: PropTypes.string.isRequired,
    iconComponent: PropTypes.element.isRequired,
    description: PropTypes.string.isRequired
}

export default PresentationCard
