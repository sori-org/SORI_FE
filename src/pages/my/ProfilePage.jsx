import styled from 'styled-components';
import MyProfileScreen from "../../components/my/profile/MyProfileScreen.jsx";

const ProfilePage = () => {
    return (
        <Container>
            <MyProfileScreen />
        </Container>
    );
}

export default ProfilePage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
`;