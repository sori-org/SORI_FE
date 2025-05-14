import axios from '../axiosInstance.js';

export const deleteStore = async (storeId) => {
    const { data } = await axios.delete(`/api/stores/${storeId}`);
    return data;
};
