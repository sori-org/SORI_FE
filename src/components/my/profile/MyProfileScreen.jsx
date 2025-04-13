import styled from "styled-components";
import Header from "../../common/header/Header.jsx";
import UserProfileCard from "./UserProfileCard.jsx";
import StoreInfoCard from "./StoreInfoCard.jsx";
import StoreList from "./StoreList.jsx";

function MyProfileScreen() {
    return (
        <Container>
            <Header title={"내 정보"} />
            <UserProfileCard />
            <StoreInfoCard />
            <StoreList />
        </Container>
    );
}

export default MyProfileScreen;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;