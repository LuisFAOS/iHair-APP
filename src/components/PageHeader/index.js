import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

import cepPromise from 'cep-promise'

import getCookie from '../../utils/cookies/getCookie'
import fetcher from '../../utils/fetcher'
import { baseURL } from '../../utils/baseURL'

import Image from 'next/image'
import ProfileMenu from '../ProfileMenu'
import SearchInput from '../SearchInput'

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

function PageHeader() {

    const {data, error} = useSWR(`${baseURL}/normal-user/listDatas`, fetcher)

    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const [showUserCompleteAddress, setShowUserCompleteAddress] = useState(false)

    return (
        <>
            <Container>
                <Wrapper>
                    <LogoBox className="logo">
                        <Link href="/lista-saloes">
                            <Image
                                height={91/2.2}
                                width={78/2.2}
                                src="/logo-red.png"
                            /> 
                        </Link>
                    </LogoBox>
                    <SearchInput id="search-salons" placeholder="Busque por serviço e salão"/>
                </Wrapper>
                <LocalizationContainer 
                    onClick={() => setShowUserCompleteAddress(!showUserCompleteAddress)}
                    className='user-localization-box'>
                    <span className="title">
                        VOCÊ ESTÁ EM
                    </span>
                    <div>
                        <LocalizationIcon/>
                        <div className="user-local">
                            {data ? `${data.userCompleteAddress.street} - ${data.userCompleteAddress.city}`: 'Carregando...'}
                        </div>
                        <ArrowDownIcon/>
                    </div>
                </LocalizationContainer>
                <UserIcon
                    onClick={() => setShowProfileMenu(!showProfileMenu)} 
                    className="user-menu"/>
            </Container>
            {showProfileMenu && <ProfileMenu userName={data ? data.user.name : '...'} showMe={() => setShowProfileMenu(false)}/>}
            {showUserCompleteAddress && (
                <UserCompleteAddressBox>
                    <div onClick={() => setShowUserCompleteAddress(false)}>
                        <CloseIcon/>
                    </div>
                    <div>
                        <Image
                            height={70}
                            width={135}
                            src="/header/my-local.png"
                        />
                    </div>
                    {data ? `${data.userCompleteAddress.street} - ${data.userCompleteAddress.neighborhood} - ${data.userCompleteAddress.city} - ${data.userCompleteAddress.state}` : 'Carregando...'}
                </UserCompleteAddressBox>
            )}
        </>
    )
}

export default PageHeader
