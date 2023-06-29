import axios from "axios";

const Api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    Headers: {
        'accept': 'application/json',
    }
})

// Api.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default Api;