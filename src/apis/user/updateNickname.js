import axios from '../axiosInstance.js';

export const updateNickname = async (displayName) => {
    const { data } = await axios.patch('/api/users/me/nickname', {
        displayName,
    });
    console.log(data)
    return data;
};
