import axios from "axios";

export const http = axios.create({
    baseURL: 'http://192.168.0.11:4000/api/desaparecidos',
    headers: {
        'Content-type': 'application/json'
    }
})