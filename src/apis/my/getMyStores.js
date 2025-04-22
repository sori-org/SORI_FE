import axios from '../axiosMockInstance.js';

export const getMyStores = async () => {
    const { data } = await axios.get('/api/my/stores');
    return data;
};
