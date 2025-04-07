import styled from "styled-components";
import MyHeader from "../common/MyHeader.jsx";
import MyPageMenu from "./MyPageMenu.jsx";
import Profile from "../../assets/img_profile.svg"


function MyMainScreen() {
    return (
        <Container>
            <MyHeader title={"My"} />
            <ProfileSection>
                <img src={Profile} alt={"프로필 사진"}></img>
                <Title>충영님 어서오세요! </Title>
            </ProfileSection>
            <MyPageMenu />
        </Container>
    );
}

export default MyMainScreen;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 3rem;
    border-radius: 10px;
`;
