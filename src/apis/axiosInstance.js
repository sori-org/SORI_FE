import axios from 'axios';

const instance = axios.create({
    baseURL: '/', // MSW base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;


