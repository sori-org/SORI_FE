import axios from '../axiosInstance.js';

export const registerStore = async (storeData) => {
    const { data } = await axios.post('/stores/register', storeData);
    return data;
};
