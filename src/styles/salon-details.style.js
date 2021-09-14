import { Star, StarFill } from '@styled-icons/bootstrap'
import { KeyboardArrowDown, KeyboardArrowUp } from '@styled-icons/material'
import styled,{ css } from 'styled-components'

import {Button} from '../components/Button.style'

export const Container = styled.div`
    display: flex;

    position: relative;
    
    padding-top: 80px;
    padding-bottom: 20px;
`

export const SalonDetailsSide = styled.div`
    width: calc(100vw - 428px);

    & > div{
        padding-left: 40px;
        padding-top: 40px;
    }

    & > div.salon-details{
        padding-top: 0px;
        padding-bottom: 20px;
        
        border-bottom: 1px solid gainsboro;
    }

    @media screen and (max-width: 950px){
        width: 100vw;
    }
`

export const ScheduleSide = styled.div`
    width: 410px;
    height: 100vh;

    background-color: white;
    box-shadow: -1px 0px 3px var(--shadow);

    position: fixed;
    right: 0px;
    z-index: -10000;

    @media screen and (max-width: 950px){
        display: none;
    }
`

export const SalonBanner = styled.div`
    margin-top: 20px;
    height: 250px;

    background-color: gainsboro;
`

export const DescriptionAndRating = styled.div`
    & *{
        font-weight: 300;
    }

    & > .salon-name{
        font-size: 2.8rem;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        padding-top: 10px;
    }

    & > div:not(.salon-name, .description){
        margin-top: 5px;
    }

    & > div.rating > span{
        font-weight: 400;

        color: #e7a74e;
    }
`

export const StarIcon = styled(StarFill)`
    width: 16px;
    height: 16px;
`

export const ShowMoreDetailsButton = styled.div`
    display: inline-block;
    margin-top: 20px;

    cursor: pointer;

    color: gray; 
`

export const KeyboardArrowDownIcon = styled(KeyboardArrowDown)`
    width: 19px;
    height: 19px;
`

export const KeyboardArrowUpIcon = styled(KeyboardArrowUp)`
    width: 19px;
    height: 19px;
`

export const MoreDetails = styled.div`
    padding: 10px 0px;

    .details-box > p{
        font-size: .9rem;
        font-weight: 300;
        padding-left: 10px;
    }

    .details-title{
        margin-top: 5px;

        font-size: 1.2rem;
    }
    
`

export const SalonOpeningHours = styled.div`

    & > ul{
        list-style: none;
        
        padding-left: 10px;
    }
    & > ul > li{
        font-size: .9rem;
        font-weight: 300;

        ${props => props.activeDay && css`
            color: var(--red);
        `}
    }
`

export const ServiceList = styled.div`
    display: flex;

    height: 120vh;
`

export const About = styled.div`

`

export const ShowMoreButton = styled(Button)`
    width: 90%;
    margin: 10px auto;
`