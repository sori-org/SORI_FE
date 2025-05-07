import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore.js";
import styled from "styled-components";
import { useKakaoLogin } from "../../hooks/mutation/useKakaoLogin.js";
import axiosInstance from "../../apis/axiosInstance.js";
import RealLoadingPage from "../common/RealLoadingPage.jsx";

function KakaoCallbackPage() {
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const navigate = useNavigate();
    const { setUserId } = useUserStore();
    const { mutate } = useKakaoLogin();

    useEffect(() => {
        const handleKakaoLogin = () => {
            const params = new URL(window.location.href).searchParams;
            const code = params.get("code");
            if (!code) {
                navigate("/");
                return;
            }

            mutate(
                { code, redirectUri: REDIRECT_URI },
                {
                    onSuccess: async (data) => {
                        console.log(data)
                        const access_token = data.jwt_token;
                        localStorage.setItem("accessToken", access_token);

                        try {
                            const res = await axiosInstance.get("/api/users/me");
                            console.log(res.data);
                            const userInfo = res.data;
                            localStorage.setItem("user", JSON.stringify(userInfo));
                            setUserId(userInfo.user_id);

                            if (!userInfo.main_store_id) {
                                navigate("/register"); // 가게 등록
                            } else {
                                navigate("/home"); // 바로 홈 이동
                            }
                        } catch (e) {
                            console.error("유저 정보 요청 실패:", e);
                            navigate("/");
                        }
                    },
                    onError: (err) => {
                        console.error("카카오 로그인 실패:", err);
                        navigate("/");
                    },
                }
            );
        };

        handleKakaoLogin();
    }, [mutate, navigate, REDIRECT_URI, setUserId]);

    return (
        <RealLoadingPage />
    );
}

export default KakaoCallbackPage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 24px;
    font-weight: bold;
`;
