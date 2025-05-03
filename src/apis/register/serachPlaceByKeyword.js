import axios from "../axiosInstance.js";

export const searchPlaceByKeyword = async (keyword) => {
    const res = await axios.get(`/api/search/place?search_keyword=${encodeURIComponent(keyword)}`);
    return res.data;
};