import getCookie from "./cookies/getCookie";
import { parseCookies } from 'nookies'
import { baseURL } from './baseURL'

export default function fetcher(key, configs){
    const {'auth.token': authToken} = parseCookies()

    return fetch(`${baseURL}${key}`, {
        method: 'GET',
        headers: {
            'authorization': authToken
        },
        ...configs
    }).then(res => res.json())
}
