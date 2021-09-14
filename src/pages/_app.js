import React from "react"

import GlobalStyle from '../styles/global.style'

import {AuthProvider} from '../context/Auth'
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
