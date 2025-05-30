import styled, { keyframes } from "styled-components"
import { useEffect } from "react"
import Profile from "../../assets/img_profile.svg"
import StoreInfoCard from "./profile/StoreInfoCard.jsx"
import StoreList from "./profile/StoreList.jsx"
import { useHeaderStore } from "../../store/useHeaderStore.js"
import { useGetUser } from "../../hooks/query/useGetUser.js"
import LogoutButton from "../../components/my/LogoutButton.jsx"
import { useControlModal } from "../../hooks/useControlModal.js"
import AboutMainStoreModal from "./storeModify/modal/AboutMainStoreModal.jsx"

function MyMainScreen() {
    const setTitle = useHeaderStore((state) => state.setTitle)
    const { data } = useGetUser()
    const { modalState, openModal, closeModal } = useControlModal()

    console.log(data)

    useEffect(() => {
        const hasSeenStoreInfo = localStorage.getItem("hasSeenStoreInfo")
        if (!hasSeenStoreInfo) {
            openModal()
        }
    }, [openModal])

    useEffect(() => {
        setTitle("My Page")
    }, [setTitle])

    const handleLogout = () => {
        console.log("로그아웃 처리")
    }


    return (
        <Container>
            <ProfileSection>
                <img src={Profile || "/placeholder.svg"} alt={"프로필 사진"} />
                <Title>{data?.display_name ? data.display_name : <SkeletonBoldText />}</Title>
            </ProfileSection>

            <StoreInfoCard />

            <StoreListWrapper>
                <StoreList/>
            </StoreListWrapper>

            <FooterSection>
                <LogoutButton onLogout={handleLogout} />
            </FooterSection>

            {modalState && <AboutMainStoreModal closeModal={closeModal} />}
        </Container>
    )
}

export default MyMainScreen

const shimmer = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
`

const SkeletonBoldText = styled.div`
    width: 120px;
    height: 1.25rem;
    border-radius: 4px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200px 100%;
    animation: ${shimmer} 1.5s infinite linear;
    margin-bottom: 4px;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 0 0.7rem;

`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    font-size: 1.25rem;
    font-weight: 500;
`

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 1rem 0;
    flex-shrink: 0;

    @media (max-width: 768px) {
        padding: 1rem 0;
        gap: 1rem;
    }
`

const StoreListWrapper = styled.div`
    width: 100%;
    
`

const FooterSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  min-height: 5vh;
  flex-shrink: 0;
`
