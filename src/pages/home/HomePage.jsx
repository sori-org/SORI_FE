import styled from 'styled-components';
import HomeScreen from '../../components/home/HomeScreen.jsx';

const HomePage = () => {
    return (
        <Container>
            <HomeScreen />
        </Container>
    );
}

export default HomePage;

const Container = styled.div`
    width: 100%;
    max-width: 480px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
`;
