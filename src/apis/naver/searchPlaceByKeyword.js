import axios from "axios";

export const searchPlaceByKeyword = async (keyword) => {
    try {
        const res = await axios.get("/naver-api/v1/search/local.json", {
            params: { query: keyword, display: 5, start: 1, sort: "random" },
            headers: {
                "X-Naver-Client-Id": import.meta.env.VITE_NAVER_CLIENT_ID,
                "X-Naver-Client-Secret": import.meta.env.VITE_NAVER_CLIENT_SECRET,
            },
        });
        return res.data.items;
    } catch (err) {
        console.error("❌ 네이버 장소 검색 실패:", err.response?.data || err.message);
        return [];
    }
};
