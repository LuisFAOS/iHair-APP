import React, { useContext } from 'react'

import AuthContext from '../../AuthContext'

import Header from '../PageHeader'

function Layout({children}) {

    const { isSigned, authDatas } = useContext(AuthContext)

    return (
        <div className="layout">
            {isSigned && (authDatas && authDatas.client.permissionOf === 'normalUser') && (
                    <Header>
                
                    </Header>
                )
            }
            {children}
        </div>
    )
}

export default Layout
