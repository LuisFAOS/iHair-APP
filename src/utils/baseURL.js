import axios from 'axios'

const instance= axios.create({
    baseURL: 'http://localhost:7070'
})

export default instance

const baseURL = 'http://localhost:7070'

export {
    baseURL
} 