import React, {createContext, useEffect, useState} from 'react'
import { useRouter } from 'next/router'

import deleteAllCookies from './utils/cookies/deleteAllCookies'
import getCookie from './utils/cookies/getCookie'

const AuthContext = createContext({ isSigned: false, authDatas: {} })

export function AuthProvider({children}) {

    const [authDatas, setAuthDatas] = useState(null)
    const [loading, setLoading] = useState(true) 

    const router = useRouter()
    
    useEffect(() => {
        (function getAuthDatasFromCookies(){
            try{
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
            }catch(error){
                const withAuthPages = ['/lista-saloes','/perfil','/buscar']
                withAuthPages.forEach(withAuthPage => {
                    if(window.location.href.includes(withAuthPage)){
                        router.push('/login')
                    }  
                })
                 
            }
        })();
        
        setLoading(false)
    },[])
    
    
    const signOut = () => {
        setAuthDatas(null);
        deleteAllCookies();
    }
    
    const signIn = ({client, permissionOf, authToken}) => {
        const newState = {client: {name: client.name, permissionOf}, authToken}
        setAuthDatas({...newState})

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