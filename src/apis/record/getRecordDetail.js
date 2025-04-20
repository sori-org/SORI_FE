import axios from '../axiosMockInstance.js';

export const getRecordDetail = async (id) => {
    const res = await axios.get(`/api/contents/${id}`);
    return res.data;
};
