import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import { baseURL } from '../utils/baseURL'

export default function useCancelableSWR (key, opts) {
    const controller = new AbortController()

    return [
        useSWR(`${baseURL}${key}`, 
            url => {
                fetcher(url, { 
                    signal: controller.signal 
                })
            }, 
            opts), 
        controller
    ]
}
