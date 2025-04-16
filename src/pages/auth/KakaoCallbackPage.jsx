import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useUserStore} from "../../store/useUserStore.js";
import styled from "styled-components";
import axios from "axios";


function KakaoCallbackPage() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        const params = new URL(window.location.href).searchParams;
        const code = params.get("code");

        if (code) {
            axios.post(`${BACKEND_URL}/kakao/callback`, {
                code: code,
                redirectUri: "http://localhost:5173/kakao/callback"
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

                .then((res) => {
                    const jwt = res.data.token;
                    localStorage.setItem("token", jwt);
                    axios.get("/user/me",{
                        headers: {Authorization: `Bearer ${jwt}`}
                    }).then((res) => {
                        setUser(res.data);
                        navigate("/home");
                    })
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
