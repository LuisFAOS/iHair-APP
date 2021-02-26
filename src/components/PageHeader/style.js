import Image from 'next/image'
import styled, { css } from 'styled-components'
import { PersonLinesFill, GeoAltFill, X } from 'styled-icons/bootstrap'
import { KeyboardArrowDown } from 'styled-icons/material'


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0px;
    z-index: 999999;

    padding: 10px 60px;

    width: 100vw;
    height: 80px;
    
    background-color: #273036;
    border-bottom: 1px solid #1e252b;

    @media screen and (max-width: 900px){
        justify-content: center;
        flex-direction: column;

        height: 180px;

        & > div > .logo{
            margin: 0px!important;
        }

        
        & > div > #search-salons-box, .user-menu{
            display: none;
        }

        & > div.user-localization-box{
            margin-top: 15px;
        }
    }
`

export const UserIcon = styled(PersonLinesFill)`
    width: 40px;
    height: 40px;

    color: white;

    cursor: pointer;
`

export const Wrapper = styled.div`
    display: flex;
`

export const LogoBox = styled.div`
    margin-right: 80px;
`

export const LocalizationContainer = styled.div`    
    cursor: pointer;

    font-size: .85rem;
    color: white;

    & > span.title{
        display: block;

        color: gray;
        font-weight: 600;
    }

    & > div > div.user-local{
        max-width: 170px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & > div{
        display: flex;
        align-items: center;
    }
`

export const LocalizationIcon = styled(GeoAltFill)`
    width: 12px;
    height: 12px;

    margin-right: 5px;

    color: white;
`

export const ArrowDownIcon = styled(KeyboardArrowDown)`
    width: 20px;
    height: 20px;

    margin-left: 3px;

    color: white;
`

export const UserCompleteAddressBox = styled.div`
    position: fixed;
    top: 90px;
    right: 25%;
    z-index: 999999;

    width: 300px;
    max-width: 100%;
    padding: 15px;

    background-color: white;
    box-shadow: 1px 1px 2px var(--shadow);

    border: 1px solid var(--whiteborder);
    border-radius: 2px;

    font-size: .85rem;

    margin-bottom: 4px;


    & > div{
        display: flex;
        justify-content: center;

        margin-bottom: 10px;
    }

    & > div:first-child{
        margin-bottom: 15px;
        padding: 2px;

        cursor: pointer;

        border: 1px solid gainsboro;
    }

    @media screen and (max-width: 400px){
        right: 0px;
    }
`

export const CloseIcon = styled(X)`
    width: 15px;
    height: 15px;
    margin: auto;

    color: gray;
`