import axios from 'axios'

export function getEvents() {
    return axios.get('http://localhost:3000/events').then(res => res.data)
}

export function getMessage() {
    return axios.get('http://localhost:3000/message').then(res => res.data)
}