import Link from 'next/link'
import styled, { css } from 'styled-components'
import { BoxArrowInRight, Calendar2Event, Heart, PersonBadge, Star, X } from 'styled-icons/bootstrap'


export const Container = styled.div`
    position: fixed;
    top: 95px;
    right: 50px;
    z-index: 999999;

    width: 300px;

    background-color: white;

    box-shadow: 1px 1px 3px var(--shadow);

    border: 1px solid var(--whiteborder);
    border-radius: 3px;

   @media screen and (max-width: 900px){
       width: 100%;
       height: calc(100vh - 70px);

       top:0px;
       right:0px;

       padding-top: 40px;
   } 
`

export const Header = styled.div`
    font-size: 2rem;
    font-weight: 600;
    padding: 5px 30px;

    border-bottom: 1px solid var(--whiteborder);

    @media screen and (min-width: 900px){
        padding-top: 20px;
   } 
`

export const CloseButton = styled.button`
    width: 100%;

    color: gray;
    font-size: 1.5rem;

    display: none;

    margin-top: 5px;
    margin-bottom: 30px;

    cursor: pointer;

    border: 1px solid var(--whiteborder);

    @media screen and (max-width: 900px){
        display: flex;
        justify-content: center;
        align-items: center;
   } 
`

export const CloseIcon = styled(X)`
    width: 20px;
    height: 20px;
`

export const Wrapper = styled.div`    
    padding-top: 30px;
    padding-bottom: 10px;
`


export const Option = styled.a`
    display: flex;
    align-items: center;

    height: 50px;
    padding: 0px 40px;

    color: gray;
    font-size: 1.2rem;

    outline: none;
    cursor: pointer;
    transition: .15s;
    :hover{
        color: #DC3545;
    }

    ${props => props.isActive && css`color: #DC3545;`}
`

const iconsCSS = css`
    width: 20px;
    height: 20px;

    margin-right: 30px;
`

export const EditProfileIcon = styled(PersonBadge)`
    ${iconsCSS}
`

export const UserSchedulesIcon = styled(Calendar2Event)`
    ${iconsCSS}
`

export const UserFavoritesSalonIcon = styled(Heart)`
    ${iconsCSS}
`

export const UserRatesIcon = styled(Star)`
    ${iconsCSS}
`

export const SignOutIcon = styled(BoxArrowInRight)`
    ${iconsCSS}
`
