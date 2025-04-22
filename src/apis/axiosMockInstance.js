import axios from 'axios';

const axiosMockInstance = axios.create({
    baseURL: '/', // MSW base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosMockInstance;


