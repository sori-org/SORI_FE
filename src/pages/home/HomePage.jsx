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
    max-width: 480px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white} url(${banner}) no-repeat center;
    background-size: 140%; 
    background-position: center 400px;

    @media (max-width: 480px) {
        background-size: 160%; /* 모바일에서 이미지 더 작게 */
        background-position: center 27rem; /* 모바일에서 위치 조정 */
    }
`;