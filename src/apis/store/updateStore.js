import axios from '../axiosInstance.js';

export const updateStore = async (storeId, updatedData) => {
    try {
        const response = await axios.patch(`/api/stores/${storeId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("가게 정보 수정 API 호출 실패:", error);
        throw error;
    }
};
