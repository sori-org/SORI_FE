import axios from '../axiosMockInstance.js';

export const getRecords = async () => {
    const { data } = await axios.get('/api/contents');
    return data;
};
