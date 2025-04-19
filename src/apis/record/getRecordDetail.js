import axios from '../axiosInstance';

export const getRecordDetail = async (id) => {
    const res = await axios.get(`/api/contents/${id}`);
    return res.data;
};
