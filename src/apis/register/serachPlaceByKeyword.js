import axios from "../axiosRealInstance.js";

export const searchPlaceByKeyword = async (keyword) => {
    const res = await axios.get(`/search/place?search_keyword=${encodeURIComponent(keyword)}`);
    console.log(res.data);
    console.log(res)
    return res.data;
};