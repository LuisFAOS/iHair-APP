import Image from 'next/image'
import React from 'react'
import SearchInput from '../SearchInput'

import {
    Container,
    UserIcon,
    Wrapper,
    LogoBox,
    LocalizationIcon,
    LocalizationContainer,
    ArrowDownIcon,
} from './style'

function PageHeader() {
    return (
        <Container>
            <Wrapper>
                <LogoBox>
                    <Image
                        height={91/2.2}
                        width={78/2.2}
                        src="/logo-red.png"
                    /> 
                </LogoBox>
                <SearchInput id="search-salons" placeholder="Busque por salão"/>
            </Wrapper>
            <LocalizationContainer>
                <span className="title">
                    VOCÊ ESTÁ EM
                </span>
                <LocalizationIcon/>
                <span className="user-local">
                    R. São bernado dos campos
                </span>
                <ArrowDownIcon/>
            </LocalizationContainer>
            <UserIcon/>
        </Container>
    )
}

export default PageHeader
