import { useState, useCallback, useEffect } from 'react'

import { baseURL } from '../utils/baseURL'

export default function useHTTP(){
    
    const [isLoading, setIsLoading] = useState(false)

    const sendRequest = useCallback(async ({entity, body, method='POST', headers={'Content-Type':'application/json'}}, setData, setErrorOnPopUp) => {
        setIsLoading(true)

        try {
            const response = await fetch(`${baseURL}/${entity}`, {
                method,
                headers: headers || {},
                body: body ? JSON.stringify(body) : null
            })
            const {status: responseStatus} = response
            if(responseStatus >= 400 && responseStatus <= 499){
                const errorMessage = await response.text()

                setErrorOnPopUp({type: 'warning', message: errorMessage})
            }else if(responseStatus === 500) throw new Error('')
            else{
                const data = await response.json()
                setData(data)
            }
        }catch(err){
            console.error(err)        
    
            setErrorOnPopUp({type: 'warning', message: 'Erro no servidor. Por favor, aguarde.'})
        }

        setIsLoading(false)
    },[])
   
    return [
        isLoading,
        sendRequest
    ]
}
