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

function PageHeader() {

    const {data, error} = useSWR(`${baseURL}/normal-user/listDatas`, fetcher)

    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const [showUserCompleteAddress, setShowUserCompleteAddress] = useState(false)
    const [userCompleteAddress, setUserCompleteAddress] = useState(null)

    async function getUserCompleteAddress(){
        try {
            if(data && !userCompleteAddress){
                const response = await cepPromise(data.CEP)
                setUserCompleteAddress({...response})
            }
            return
        } catch (error) {
            setUserCompleteAddress('erro ao pegar seu endereço')
        }
    }

    getUserCompleteAddress()

    return (
        <>
            <Container>
                <Wrapper>
                    <LogoBox className="logo">
                        <Image
                            height={91/2.2}
                            width={78/2.2}
                            src="/logo-red.png"
                        /> 
                    </LogoBox>
                    <SearchInput id="search-salons" placeholder="Busque por salão"/>
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
                            {data && userCompleteAddress ? `${userCompleteAddress.street} - ${userCompleteAddress.city}` : 'Carregando...'}
                        </div>
                        <ArrowDownIcon/>
                    </div>
                </LocalizationContainer>
                <UserIcon
                    onClick={() => setShowProfileMenu(!showProfileMenu)} 
                    className="user-menu"/>
            </Container>
            {showProfileMenu && <ProfileMenu userName={data.name} closeProfileMenu={() => setShowProfileMenu(false)}/>}
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
                    {userCompleteAddress ? `${userCompleteAddress.street} - ${userCompleteAddress.neighborhood} - ${userCompleteAddress.city} - ${userCompleteAddress.state}` : 'Carregando...'}
                </UserCompleteAddressBox>
            )}
        </>
    )
}

export default PageHeader
