import React, {createContext, useEffect, useState} from 'react'
import { useRouter } from 'next/router'

import { setCookie, parseCookies, destroyCookie } from 'nookies'

import deleteAllCookies from '../utils/cookies/deleteAllCookies'
import getCookie from '../utils/cookies/getCookie'

const AuthContext = createContext({ isSigned: false, authClient: {}, isLoading: true, signIn: ()=> {}, signOut: () => {} })

export function AuthProvider({children}) {

    const [authClient, setAuthClient] = useState(null)
    const [isLoading, setIsLoading] = useState(true) 

    const router = useRouter()
    
    useEffect(() => {
        (function getUserFromCookie(){
            try{
                const { 
                    'auth.token': authToken, 
                    'auth.clientpermission': permissionOf, 
                    'auth.clientid': id, 
                    'auth.clientname': name 
                } = parseCookies()
                if(authToken) setAuthClient({id, name, authToken, permissionOf})
            }catch(error){
                const withAuthPages = ['/lista-saloes','/perfil','/buscar']
                withAuthPages.forEach(withAuthPage => {
                    if(window.location.href.includes(withAuthPage)){
                        router.push('/login')
                    }  
                })
                 
            }
        })();
        
        setIsLoading(false)
    },[])
    
    const signOut = () => {
        setAuthClient(null);
        destroyCookie(undefined, 'auth.token'); 
        destroyCookie(undefined, 'auth.clientpermission'); 
        destroyCookie(undefined, 'auth.clientname'); 
        destroyCookie(undefined, 'auth.clientid'); 
    }
    
    const signIn = newAuthClient => {
        setAuthClient({...newAuthClient})
        setCookie(undefined, 'auth.token', newAuthClient.authToken, {maxAge: 60 * 60 * 72})
        setCookie(undefined, 'auth.clientpermission', newAuthClient.permissionOf, {maxAge: 60 * 60 * 72})
        setCookie(undefined, 'auth.clientname', newAuthClient.name, {maxAge: 60 * 60 * 72})
        setCookie(undefined, 'auth.clientid', newAuthClient.id, {maxAge: 60 * 60 * 72})
    } 
    
    return (
        <AuthContext.Provider value={{isSigned: !!authClient, isLoading, authClient, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
