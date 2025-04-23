import axios from '../axiosMockInstance.js';

export const updateNickname = async (displayName) => {
    const { data } = await axios.patch('/api/user/nickname', {
        displayName,
    });
    return data;
};
