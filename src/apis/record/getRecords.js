import axios from '../axiosInstance';

export const getRecords = async () => {
    const { data } = await axios.get('/api/contents');
    return data;
};
