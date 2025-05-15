import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>😢 페이지를 찾을 수 없어요</Title>
            <Description>요청하신 페이지가 존재하지 않거나, 이동되었을 수 있어요.</Description>
            <Button onClick={() => navigate("/")}>홈으로 가기</Button>
        </Container>
    );
}

export default NotFoundPage;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const Description = styled.p`
  color: #777;
`;

const Button = styled.button`
  margin-top: 1rem;
  background-color: #49c48f;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
