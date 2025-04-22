import axios from '../axiosMockInstance.js';

export const getMyUser = async () => {
    const { data } = await axios.get('/api/my/user');
    return data;
};
