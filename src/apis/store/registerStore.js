import axios from '../axiosInstance.js';

export const registerStore = async (storeData) => {
    const { data } = await axios.post('api/stores', storeData);
    return data;
};
