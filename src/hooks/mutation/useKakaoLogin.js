import { useMutation } from "@tanstack/react-query";
import {kakaoLoginRequest} from "../../apis/auth/kakaoLoginRequest.js";


export const useKakaoLogin = () => {
    return useMutation({
        mutationFn: kakaoLoginRequest,
    });
};
