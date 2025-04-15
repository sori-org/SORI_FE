import styled from "styled-components";
import {useUserStore} from "../../store/useUserStore.js";
import {mockUser} from "../../apis/mock/mockUser.js"
import {useNavigate} from "react-router-dom";
import KakaoImage from "../../assets/img_kakao.svg";
import RabbitImage from "../../assets/img_profile.svg";
import SoundImage from "../../assets/img_sound.svg";

function LoginPage() {
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();

    // mock 데이터로 테스트
    // const handleMockLogin = () => {
    //     setUser(mockUser);
    //     localStorage.setItem("user", JSON.stringify(mockUser));
    //     navigate("/home");
    // };


    const handleKakaoLogin = () => {
        const KAKAO_JAVASCRIPT_KEY = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
        const REDIRECT_URI = "http://localhost:5173/kakao/callback";

        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_JAVASCRIPT_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    }

    return (
        <Container>
            <img src={RabbitImage} alt="토끼" />
            <Title>
                <img src={SoundImage} alt="소리" />
                <Highlight>소리</Highlight>와 함께
            </Title>
            <LoginButton src={KakaoImage} alt="카카오 로그인" onClick={handleKakaoLogin} />
        </Container>
    );
}


export default LoginPage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
    gap: 1.5rem;
    padding-bottom: 5rem;
`;

const Title = styled.p`
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    color: #333;
`;

const Highlight = styled.span`
    color: #49c48f;
    font-weight: 700;
`;

const LoginButton = styled.img`
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        transform: scale(0.98);
    }
`;

