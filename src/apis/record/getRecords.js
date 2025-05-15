import axios from '../axiosInstance.js';

export const getRecords = async () => {
    const { data } = await axios.get('/api/content/');
    return data;
};
