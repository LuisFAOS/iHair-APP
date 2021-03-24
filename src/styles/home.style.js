import { Wallet } from '@styled-icons/boxicons-solid'
import styled, { css } from 'styled-components'
import { EyeFill, HourglassSplit, StarFill } from 'styled-icons/bootstrap'
import { Button } from '../components/Button.style'

export const Container = styled.div`
`

export const Apresentation = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0px 50px;
    padding-top: 30px;

    color: white;
    background-color: var(--black);

    & ~ svg {
        margin-top: -3px;
        transform: rotate(180deg);
    }

    @media screen and (max-width: 1060px){
        flex-direction: column;
    }

    @media screen and (max-width: 500px){
        padding: 0px 40px;
        padding-top: 40px;
    }
`

export const ImageBox = styled.div`
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`

export const ProjectDescription = styled.div`
    width: 500px;
    max-width: 100%;

    padding-left: 20px;

    & > :first-child{
        font-size: 2.2rem;
        font-weight: 600;

        margin-bottom: 10px;
    }
    & > :not(:first-child){
        margin-bottom: 20px;
        font-size: .95rem;
    }

    @media screen and (max-width: 1060px){
        margin-top: 50px;
        margin-bottom: 30px;
        padding-left: 0px;
    }

    @media screen and (max-width: 620px){
        & > :first-child{
            font-size: 1.7rem;
            font-weight: 600;

            margin-bottom: 10px;
        }
        & > :not(:first-child){
            margin-bottom: 40px;
            font-size: .85rem;
        }
    }
`

export const LoginButton = styled(Button)`
    width: 150px;
`

export const SalonRegistrationBenefits = styled.div`
    padding: 40px;

    margin-top: 40px;

    & > p{
        font-size: 1.4rem;
        text-align: center;

        margin-bottom: 30px;
    }

    & > button{
        width: 360px;
        max-width: 90%;
    }
`

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;

    margin: 40px 0px;
`

export const BenefitsList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > div{
        display: flex;
        justify-content: space-around;

        @media screen and (max-width: 960px){
            margin-top: 40px;

            & > :not(:first-child){
                margin: 0px;
                margin-left: 40px;
            }
        }

        @media screen and (max-width: 520px){
            flex-direction: column;
            & > :not(:first-child){
                margin: 0px;
                margin-top: 40px;
            }
        }
    }

    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`

export const BenefitCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 250px;
    width: 180px;
    padding: 20px 10px;

    border: 1px solid var(--whiteborder);

    :not(:first-child){
        margin: 0px 40px;
    }

    & > div{
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        width: 90px;
        height: 90px;
        margin-bottom: 10px;

        & > :first-child{
            position: absolute;
            z-index: -100000;
        }
    }

    & > span{
        font-size: 1.1rem;
    }

    & > p{
        text-align: center;

        font-size: .9rem;
    }

    transition: .15s;
    :hover{
        box-shadow: 1px 1px 2px var(--shadow);
    }
`

const iconsCSS = css`
    width: 30px;
    height: 30px;

    color: white;
`

export const PracticalityIcon = styled(HourglassSplit)`
    ${iconsCSS}
`

export const VisibilityIcon = styled(EyeFill)`
    ${iconsCSS}
`

export const WalletIcon = styled(Wallet)`
    ${iconsCSS}
`

export const RateIcon = styled(StarFill)`
    ${iconsCSS}
`