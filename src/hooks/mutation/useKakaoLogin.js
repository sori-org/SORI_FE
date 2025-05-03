import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const kakaoLoginRequest = async ({ code, redirectUri }) => {
    const { data } = await axios.post(`${BACKEND_URL}/api/auth/kakao/callback`, {
        code,
        redirectUri,
    }, {
        headers: { "Content-Type": "application/json" },
    });
    return data;
};

export const useKakaoLogin = () => {
    return useMutation({
        mutationFn: kakaoLoginRequest,
    });
};
