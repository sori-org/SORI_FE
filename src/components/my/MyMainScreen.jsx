import styled, {keyframes} from "styled-components"
import Profile from "../../assets/img_profile.svg"
import StoreInfoCard from "./profile/StoreInfoCard.jsx"
import StoreList from "./profile/StoreList.jsx"
import { useEffect } from "react"
import { useHeaderStore } from "../../store/useHeaderStore.js"
import { useGetUser } from "../../hooks/query/useGetUser.js"
import LogoutButton from "../../components/my/LogoutButton.jsx"

function MyMainScreen() {
    const setTitle = useHeaderStore((state) => state.setTitle)
    const { data } = useGetUser()

    useEffect(() => {
        setTitle("My Page")
    }, [setTitle])

    const handleLogout = () => {
        // 여기에 로그아웃 API 호출 로직이 들어갈 예정
        console.log("로그아웃 처리")
    }

    return (
        <Container>
            <ProfileSection>
                <img src={Profile || "/placeholder.svg"} alt={"프로필 사진"} />
                <Title>{data?.display_name ? data.display_name : <SkeletonBoldText />}</Title>
            </ProfileSection>
            <StoreInfoCard />
            <StoreList />
            <FooterSection>
                <LogoutButton onLogout={handleLogout} />
            </FooterSection>
        </Container>
    )
}

export default MyMainScreen

// 스켈레톤 로딩 애니메이션
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
`

const FooterSection = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    //padding: ;
`
