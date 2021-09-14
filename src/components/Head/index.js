import React from 'react'

import Head from 'next/head'

function HeadPage({title}){
    return (
        <Head>
            <link rel="icon" type="imagem/png" href="/logo.png"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link 
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400&display=swap" 
              rel="stylesheet"/>
            <title>{title}</title>  
        </Head>
    )
}

export default React.memo(HeadPage)
