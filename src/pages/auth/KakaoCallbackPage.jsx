import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore.js";
import styled from "styled-components";
import { useKakaoLogin } from "../../hooks/mutation/useKakaoLogin.js";
import axiosInstance from "../../apis/axiosInstance.js"; // ✅ 공통 axios 사용

function KakaoCallbackPage() {
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);
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
                        const access_token = data.jwt;
                        localStorage.setItem("accessToken", access_token);

                        try {
                            const res = await axiosInstance.get("/api/users/me", {
                                headers: {
                                    Authorization: `Bearer ${access_token}`,
                                },
                            });

                            const userInfo = res.data;
                            setUser(userInfo);
                            localStorage.setItem("user", JSON.stringify(userInfo));

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
    }, [mutate, navigate, REDIRECT_URI, setUser]);

    return <Container>로그인 중입니다...</Container>;
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
