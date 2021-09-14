import styled,{css} from 'styled-components'

import { Clock, Coin, Plus, GeoAlt } from '@styled-icons/bootstrap'
import { KeyboardArrowDown,KeyboardArrowUp } from 'styled-icons/material'

import Image from 'next/image'
import { Button } from '../../Button.style'

const ScheduleStatusColorsMap = {
    "PENDENTE": css`color: var(--green);`,
    "FECHADO": css`color: var(--red);`,
    "FALTOU": css`color: var(--red);`,
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    font-size: .85rem;

    margin-top: 5px;
    padding: 10px;
    width: 350px;
    ${props => props.isSeeingMoreDetails ? css`height: auto;` : css`height: 136px;`}

    border: 1px solid var(--whiteborder);
    border-radius: 2px;

    & > div.schedule-service-name{
        color: gray;

        margin-top: 4px;
    }
`

export const SalonDetails = styled.div`
    display: flex;
    align-items: center;

    padding: 7px 2px;
    
    border-bottom: 1px solid var(--whiteborder);

    & > div.salon-name-and-status-wrapper{
        margin-left: 15px;

        display: flex;
        flex-direction: column;

        & > span.salon-name{
            font-size: 1.1rem;
        }
        
        & > span.schedule-status{
            font-weight: 300!important;
            font-size: .8rem;
            ${props => ScheduleStatusColorsMap[props.scheduleStatus]}
        }
    }
`

export const ImageCard = styled(Image)`
    border-radius: 50%;

    background-color: var(--whiteborder);
`

export const PlusButton = styled(Button)`
    height: 18px;
    width: 100%;
    padding: 0px;
    margin-top: 8px;    

    border: 1px solid var(--whiteborder);
    
    font-size: .8rem;

    &:focus{
        box-shadow: none;
    }
`

export const OpenChatButton = styled(Button)`
    height: 25px;
    width: 100%; 
    margin-top: 8px;   
    padding: 0px;

    font-size: .9rem;
    font-weight: 300;
`

export const ScheduleMoreDetails = styled.div`
    margin-top: 7px;

    font-size: .85rem;
    
    & > span {
        color: var(--black);
        font-weight: 300!important;
    }

    & > span > span.schedule-salon-neighborhood{
        font-weight: 300!important;
    }

    & > div.schedule-more-details-first-line{
        display: flex;
    
        margin-bottom: 4px;

        & > span {
            color: var(--black);
            font-weight: 300!important;

            display: flex;
            align-items: center;
        }
    
        & > :first-child{
            margin-right: 12px;
        }
    }
`

const iconsCSS = css`
    width: 14px;
    heigth: 14px;
    margin-right: 4px;

    color: black;
`

const keyIconsCSS = css`
    width: 16px;
    height: 16px;

    color: black;
`

export const KeyDownIcon = styled(KeyboardArrowDown)`${keyIconsCSS}`
export const KeyUpIcon = styled(KeyboardArrowUp)`${keyIconsCSS}`

export const ClockIcon = styled(Clock)`${iconsCSS}`
export const CoinIcon = styled(Coin)`${iconsCSS}`
export const LocationIcon = styled(GeoAlt)`${iconsCSS}
    margin: 0px;
`

