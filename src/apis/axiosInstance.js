import axios from "axios";
import { useUserStore } from "../store/useUserStore"; // useUserStore 임포트

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터: Access Token 만료 시 Refresh Token으로 갱신 로직
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        // 401 Unauthorized 에러이고, 아직 재시도하지 않은 경우
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshResponse = await axios.post(
                    `${axiosInstance.defaults.baseURL}/api/auth/kakao/refresh`, // 백엔드의 Refresh Token 갱신 API 엔드포인트
                    {},
                    { withCredentials: true }
                );

                const newAccessToken = refreshResponse.data.accessToken;

                localStorage.setItem("accessToken", newAccessToken);

                // 원래 요청에 새로운 Access Token 적용 후 재시도
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                // Refresh Token 갱신 실패 (예: Refresh Token 만료 또는 유효하지 않음)
                console.error("Failed to refresh token. Redirecting to login.", refreshError);
                useUserStore.getState().setLogout();
                window.location.href = "/";
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;