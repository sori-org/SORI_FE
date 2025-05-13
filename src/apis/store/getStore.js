import axios from '../axiosInstance.js';

// 가게 단일 조회
export const getStore = async (storeId) => {
    const { data } = await axios.get(`/api/stores/${storeId}`);
    return data;
};
