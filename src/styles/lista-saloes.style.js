import styled from 'styled-components'
import { KeyboardArrowDown } from 'styled-icons/material'
import { Button } from '../components/Button.style'

export const Container = styled.div`

`

export const ProjectApresentation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 120px 30px;
    padding-bottom: 0px;

    background-color: #273036;

    @media screen and (max-width: 900px){
        padding-top: 200px;
    }

    & > div{
        text-align: center;
        color: white;

        & > :first-child {
            font-size: 4.5rem;

            margin-bottom: 40px;
        } 
    }

    & ~ svg {
        margin-top: -3px;
        height: auto;
    }

`

export const SeeListButton = styled(Button)`
    color: white;

    width: 100px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 5px;

    padding: 3px;
`

export const ArrowDownIcon = styled(KeyboardArrowDown)`
    width: 32px;
    height: 32px;
`

export const SalonListWrapper = styled.div`
    height: 180vh;
    padding: 30px;
    padding-top: 0px;

    @media screen and (max-width: 380px){
        padding: 5px;
        padding-top: 0px;
    }

    @media screen and (max-width: 900px){
        height: 220vh;
        padding-bottom: 80px;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;

    margin-top: 20px;

    & > span{
        margin-left: 15px;
        font-size: 2.3rem;
    }
`

export const FilterList = styled.div`


    @media screen and (max-width: 510px){
        display: none;
    }

    & > ul{
        cursor: pointer;

        display: flex;
        justify-content: center;
        list-style-type: none;

        & > li{
            padding: 8px 25px;
            margin: 10px;

            border: 1px solid gainsboro;
            border-radius: 18px;

            color: gray;

            transition: .10s;

            :hover{
                background-color: whitesmoke;
            }
        }
    }
`

export const SelectsFiltersContainer = styled.div`
    @media screen and (min-width: 510px){
        display: none;
    }

    & > div{
        margin-top: 20px;
    }
`

export const SalonListContainer = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;

    margin-top: 20px;

    height: calc(180vh - 340px);

    @media screen and (max-width: 900px){
        height: calc(100% - 300px);
    }

    @media screen and (max-width: 1229px){
        justify-content: center;
    }

    & > div{
        margin: 20px;

        @media screen and (max-width: 1246px){
            width: 45%;
        }

        @media screen and (max-width: 876px){
            margin: 20px 0px;
            width: 600px;
            max-width: 100%;
        }
    }
`

export const SeeMoreSalonsButton = styled(Button)`
    width: 60vw;
    margin: auto;

    background-color: #DC3545;
    color: white;

    display: flex;
    justify-content: center; 

`
