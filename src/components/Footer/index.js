import Image from 'next/image'
import React from 'react'

import {
    Container, 
    FacebookIcon, 
    InstagramIcon, 
    LogoBox,
    SocialMedias,
    TwitterIcon,
} from './style'

export default function Footer(){
    return (
        <Container>
            <LogoBox>
                <div>
                    <Image
                        width={17}
                        height={20}
                        src='/logo.png'
                    />
                </div>
                <span>iHair</span>sls
            </LogoBox>

            <SocialMedias>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </SocialMedias>

            <span>
                Luis FAOS, 2021, All rights reserved
            </span>
        </Container>
    )
}