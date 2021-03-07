import styled, { css } from 'styled-components'
import { PersonFill, Search, House, HouseFill, Person } from 'styled-icons/bootstrap'

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0px;
    z-index: 9999;

    @media screen and (min-width: 900px){
        display: none;
    }

    width: 100%;
    height: 70px;

    border-top: 1px solid var(--whiteborder);
    background-color: white;
`

export const ButtonPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    width: 55px;
    height: 55px;
    margin: 0px 60px;

    background-color: white;
    color: gray;

    border-radius: 50%;

    transition: .15s;
    :hover{
        color: black;
    }

    & > span {
        font-size: .75rem;
    }

    ${props => props.isActive && css`
        color: black; 
    `}

    @media screen and (max-width: 400px){
        margin: 0px 20px;
    }
`

const iconCSS = css`
    width: 20px;
    height: 20px;

    margin-bottom: 3px;
`

export const HomeIcon = styled(House)`${iconCSS}`
export const HomeFillIcon = styled(HouseFill)`${iconCSS}
    color: black;

    & ~ span{
        color: black; 
    }
`

export const SearchIcon = styled(Search)`${iconCSS}`

export const ProfileIcon = styled(Person)`${iconCSS}
    width: 22px;
    height: 22px;
`

export const ProfileFillIcon = styled(PersonFill)`${iconCSS}
    width: 22px;
    height: 22px;

    color: black;

    & ~ span{
        color: black; 
    }
`