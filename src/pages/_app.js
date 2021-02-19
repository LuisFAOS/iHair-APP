import React from "react"

import GlobalStyle from '../styles/Global.style'

import {AuthProvider} from '../AuthContext'
import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <AuthProvider>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </AuthProvider>
        </>
    )
}
