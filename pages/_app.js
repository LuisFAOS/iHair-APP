import React from "react"

import GlobalStyle from '../pages-styles/Global.style'
import '../components/Loading/style.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
    )
}
