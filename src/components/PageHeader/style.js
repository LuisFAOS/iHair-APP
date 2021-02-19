import Image from 'next/image'
import styled, { css } from 'styled-components'
import { PersonLinesFill, GeoAltFill } from 'styled-icons/bootstrap'
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
`

export const LocalizationIcon = styled(GeoAltFill)`
    width: 12px;
    height: 12px;

    margin-right: 8px;

    color: white;
`

export const ArrowDownIcon = styled(KeyboardArrowDown)`
    width: 20px;
    height: 20px;

    margin-left: 3px;

    color: white;
`