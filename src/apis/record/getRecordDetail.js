import axios from '../axiosInstance.js';

export const getRecordDetail = async (id) => {
    const {data} = await axios.get(`/api/content/${id}`);
    return data;
};
