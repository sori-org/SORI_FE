import styled from "styled-components";
import MyHeader from "../common/header/MyHeader.jsx";
import Profile from "../../assets/img_profile.svg"
import StoreInfoCard from "./profile/StoreInfoCard.jsx";
import StoreList from "./profile/StoreList.jsx";

function MyMainScreen() {
    return (
        <Container>
            <MyHeader title={"My page"} />
            <ProfileSection>
                <img src={Profile} alt={"프로필 사진"}></img>
                <Title>
                    김충영
                </Title>
            </ProfileSection>
            <StoreInfoCard />
            <StoreList />
            <Logout>로그아웃</Logout>
        </Container>
    );
}

export default MyMainScreen;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    font-size: 1.25rem;
    font-weight: 500;
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 1rem 0;
    margin-bottom: 2rem;
`;

const Logout = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2rem;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 500;
    color: #999999;
    border-bottom: 2px solid #999999;
`;