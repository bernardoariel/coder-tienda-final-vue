import axios from 'axios';

const mockApi = axios.create({
    baseURL:'https://63d82323afbba6b7c94b3aa2.mockapi.io'
})

export default mockApi;