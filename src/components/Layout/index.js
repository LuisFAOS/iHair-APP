import React, { useContext } from 'react'

import AuthContext from '../../context/Auth'
import BottomBar from '../BottomBar'
import Footer from '../Footer'

import TopBar from '../TopBar'

function Layout({children}) {

    const { isSigned, authClient } = useContext(AuthContext)

    const USER_COMPONENTS_CONDITION = isSigned && 
    (authClient?.permissionOf === 'normalUser') && children.type.name !== 'Login'

    return (
        <div className="layout">
            {USER_COMPONENTS_CONDITION && <TopBar/>}
            
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
