import styled from 'styled-components';
import HomeScreen from '../../components/home/HomeScreen.jsx';
import banner from '../../assets/home_banner.svg';

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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
    background-size: 140%;
    background: white url(${banner}) no-repeat center 170%;
`;
