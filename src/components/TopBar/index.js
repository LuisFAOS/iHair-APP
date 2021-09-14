import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useCancelableSWR } from '../../hooks'

import cepPromise from 'cep-promise'

import getCookie from '../../utils/cookies/getCookie'
import fetcher from '../../utils/fetcher'
import { baseURL } from '../../utils/baseURL'

import Image from 'next/image'
import ProfileMenu from '../ProfileMenu'
import SearchInput from '../Fields/Search'

import {
    Container,
    UserIcon,
    Wrapper,
    LogoBox,
    LocalizationIcon,
    LocalizationContainer,
    ArrowDownIcon,
    UserCompleteAddressBox,
    CloseIcon,
} from './style'
import Link from 'next/link'

function TopBar() {

    //const {data, error} = useSWR(`/normal-user`, fetcher)
    const data = '';
    const router = useRouter()

    const [isVisibleProfileMenu, setProfileMenuVisibility] = useState(false)
    const [isVisibleUserCompleteAddress, setUserCompleteAddressVisibility] = useState(false)

    return (
        <>
            <Container>
                <Wrapper>
                    <LogoBox onClick={() => router.push('/lista-saloes')}
                        className="logo">
                        <Image
                            height={91/2.2}
                            width={78/2.2}
                            src="/logo-red.png"
                        /> 
                    </LogoBox>
                    <SearchInput id="search-salons" placeholder="Busque por serviço e salão"/>
                </Wrapper>
                <LocalizationContainer 
                    onClick={() => setUserCompleteAddressVisibility(!isVisibleUserCompleteAddress)}
                    className='user-localization-box'>
                    <span className="title">
                        VOCÊ ESTÁ EM
                    </span>
                    <div className="user-localpoint-box">
                        <LocalizationIcon/>
                        <div className="user-localpoint">
                            {data ? `${data.user.completeAddress.street} - ${data.user.completeAddress.city}`: 'Carregando...'}
                        </div>
                        <ArrowDownIcon/>
                    </div>
                </LocalizationContainer>
                <UserIcon
                    onClick={() => setProfileMenuVisibility(!isVisibleProfileMenu)}
                    className="user-menu noClose"/>
            </Container>
            {isVisibleProfileMenu && <ProfileMenu userName={data ? data.user.name : '...'} showMe={() => setProfileMenuVisibility(false)}/>}
            {isVisibleUserCompleteAddress && (
                <UserCompleteAddressBox>
                    <div onClick={() => setUserCompleteAddressVisibility(false)}>
                        <CloseIcon/>
                    </div>
                    <div>
                        <Image
                            height={70}
                            width={135}
                            src="/header/my-local.png"
                        />
                    </div>
                    {data ? `${data.user.completeAddress.street} - ${data.user.completeAddress.neighborhood} - ${data.user.completeAddress.city} - ${data.user.completeAddress.state}` : 'Carregando...'}
                </UserCompleteAddressBox>
            )}
        </>
    )
}


export default TopBar
