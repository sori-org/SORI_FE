import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore.js";
import styled from "styled-components";
import axios from "axios";

function KakaoCallbackPage() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        const handleKakaoLogin = async () => {
            try {
                const params = new URL(window.location.href).searchParams;
                const code = params.get("code");
                if (!code) return;

                // 1. 백엔드에 인가코드 전송 -> JWT 받기
                const { data } = await axios.post(`${BACKEND_URL}/kakao/callback`, {
                    code,
                    redirectUri: REDIRECT_URI,
                }, {
                    headers: { "Content-Type": "application/json" },
                });

                const { access_token } = data;
                localStorage.setItem("accessToken", access_token);

                // 2. JWT로 유저 정보 요청
                const res = await axios.get(`${BACKEND_URL}/users/me`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });

                setUser(res.data);
                localStorage.setItem("user", JSON.stringify(res.data));
                navigate("/home");
            } catch (err) {
                console.error("카카오 로그인 실패:", err);
                navigate("/");
            }
        };

        handleKakaoLogin();
    }, []);

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
