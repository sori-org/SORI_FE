import axiosInstance from "../axiosInstance.js";

export const kakaoLoginRequest = async ({ code, redirectUri }) => {
    const { data } = await axiosInstance.post(`/api/auth/kakao/callback`, {
        code,
        redirectUri,
    }, {
        headers: { "Content-Type": "application/json" },
    });
    return data;
};