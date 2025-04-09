import styled from "styled-components";
import KakaoImage from "../../assets/img_kakao.svg";

function LoginPage() {
    return (
        <Container>
            <Title>소리와 함께</Title>
            <img src={KakaoImage}></img>
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
`;

const Title = styled.p`
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
`;