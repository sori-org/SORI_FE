import styled from 'styled-components';
import ResultScreen from "../../components/result/ResultScreen.jsx";

const ResultPage = () => {
    return (
        <Container>
            <ResultScreen />
        </Container>
    );
}

export default ResultPage;

const Container = styled.div`
    width: 100%;
    max-width: 480px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
`;