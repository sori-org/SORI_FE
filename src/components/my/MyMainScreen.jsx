import styled from "styled-components";
import Profile from "../../assets/img_profile.svg"
import StoreInfoCard from "./profile/StoreInfoCard.jsx";
import StoreList from "./profile/StoreList.jsx";
import {useEffect} from "react";
import {useHeaderStore} from "../../store/useHeaderStore.js";
import {useGetUser} from "../../hooks/query/useGetUser.js";

function MyMainScreen() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const { data } = useGetUser()

    useEffect(() => {
        setTitle("My Page");
    }, []);

    return (
        <Container>
            <ProfileSection>
                <img src={Profile} alt={"프로필 사진"} />
                <Title>
                    {data?.display_name ? data.display_name : "불러오는 중..."}
                </Title>
            </ProfileSection>
                <StoreInfoCard  />
                <StoreList />
            <Logout>로그아웃</Logout>
        </Container>
    );

}

export default MyMainScreen;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
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
`;

const Logout = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2rem;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 500;
    color: #767676;
    cursor: pointer;
`;