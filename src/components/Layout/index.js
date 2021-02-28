import React, { useContext } from 'react'

import AuthContext from '../../AuthContext'
import BottomBar from '../BottomBar'
import Footer from '../Footer'

import Header from '../PageHeader'

function Layout({children}) {

    const { isSigned, authDatas } = useContext(AuthContext)

    const USER_COMPONENTS_CONDITION = isSigned && 
    (authDatas && authDatas.client.permissionOf === 'normalUser') 
    

    return (
        <div className="layout">
            {USER_COMPONENTS_CONDITION && <Header/>}
            
            {children}

            {
                USER_COMPONENTS_CONDITION && (
                    <>
                        <BottomBar/>
                        <Footer/>
                    </>
                )
            }
        </div>
    )
}

export default Layout
