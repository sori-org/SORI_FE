import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useUserStore} from "../../store/useUserStore.js";
import styled from "styled-components";
import axios from "axios";

function KakaoCallbackPage() {
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        const params = new URL(window.location.href).searchParams;
        const code = params.get("code");

        if (code) {
            console.log("카카오 인가코드:", code);

            axios.post("http://ec2-44-208-199-212.compute-1.amazonaws.com/kakao/callback",
                {
                    code: code,
                    redirectUri: "http://localhost:5173/kakao/callback"
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((res) => {
                    const userData = res.data;
                    setUser(userData);
                    localStorage.setItem("user", JSON.stringify(userData));
                    navigate("/home");
                })
                .catch((err) => {
                    console.error("카카오 로그인 실패:", err);
                    navigate("/");
                });
        }
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
