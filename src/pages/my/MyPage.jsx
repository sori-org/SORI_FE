import styled from 'styled-components';
import MyMainScreen from "../../components/my/MyMainScreen.jsx";

const MyPage = () => {
    return (
        <Container>
            <MyMainScreen />
        </Container>
    );
}

export default MyPage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
`;