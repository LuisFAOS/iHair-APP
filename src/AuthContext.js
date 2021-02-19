import React, {createContext, useEffect, useState} from 'react'

import deleteAllCookies from './native/cookies/deleteAllCookies'
import getCookie from './native/cookies/getCookie'

const AuthContext = createContext({ isSigned: false, authDatas: {} })

export function AuthProvider({children}) {

    const [authDatas, setAuthDatas] = useState(null)
    const [loading, setLoading] = useState(true) 
    
    useEffect(() => {
        const client = {
            ...JSON.parse(getCookie('client')).client,
            permissionOf: JSON.parse(getCookie('client')).permissionOf
        }
        const token = getCookie('authToken')
        if(client && token){
            const authOBJ = {
                client,
                token
            } 
            
            setAuthDatas({
                ...authOBJ
            })
        }
        setLoading(false)
    },[])
    
    
    const signOut = () => {
        deleteAllCookies()
        setAuthDatas(null);
    }
    
    const signIn = ({client, permissionOf, authToken}) => {
        setAuthDatas({client, permissionOf, authToken})

        const todayDate = new Date()
        todayDate.setTime(todayDate.getTime() + (3 * 24 * 60 * 60 * 1000))         

        document.cookie = `authToken=${authToken}; expires=${todayDate}; path=/`
        document.cookie = `client=${JSON.stringify({
            client, permissionOf
        })}; expires=${todayDate}; path=/`
    } 
    
    return (
        <AuthContext.Provider value={{isSigned: !!authDatas, loading, authDatas, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;