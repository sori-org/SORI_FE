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

    const handleMockLogin = () => {
        setUser(mockUser); // 상태에 저장
        localStorage.setItem("user", JSON.stringify(mockUser)); // 새로고침 유지
        navigate("/home"); // 홈으로 이동
    };

    return (
        <Container>
            <img src={RabbitImage} alt="토끼" />
            <Title>
                <img src={SoundImage} alt="소리" />
                <Highlight>소리</Highlight>와 함께
            </Title>
            <LoginButton src={KakaoImage} alt="카카오 로그인" onClick={handleMockLogin} />
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
    width: 250px; // 필요 시 조절
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        transform: scale(0.98);
    }
`;

