import getCookie from "./cookies/getCookie";

export default function fetcher(url){
    return fetch(url, {
        method: 'GET',
        headers: {
            'authorization': getCookie('authToken')
        }
    }).then(res => res.json())
}