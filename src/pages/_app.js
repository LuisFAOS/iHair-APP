import React from "react"

import GlobalStyle from '../styles/Global.style'

import {AuthProvider} from '../AuthContext'

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <AuthProvider>
                <Component {...pageProps}/>
            </AuthProvider>
        </>
    )
}
