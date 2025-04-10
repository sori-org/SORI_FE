import styled from "styled-components";
import KakaoImage from "../../assets/img_kakao.svg";
import RabbitImage from "../../assets/img_profile.svg";
import SoundImage from "../../assets/img_sound.svg";

function LoginPage() {
    return (
        <Container>
            <img src={RabbitImage} alt="토끼" />
            <Title>
                <img src={SoundImage} alt={"소리"}></img>
                <Highlight>소리</Highlight>와 함께
            </Title>
            <img src={KakaoImage} alt="카카오 로그인"/>
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
