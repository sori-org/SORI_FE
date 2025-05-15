import axios from '../axiosInstance.js';

// 가게 목록 조회
export const getStoreList = async () => {
    const { data } = await axios.get('/api/users/me/stores');
    return data;
};
