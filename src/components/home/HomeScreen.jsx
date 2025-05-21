import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useGetUser } from "../../hooks/query/useGetUser.js"
import HomeHeader from "./HomeHeader"
import CreateContentButton from "./CreateContentButton"
import SoriCharacter from "./SoriCharacter"
import HomeBottom from "./HomeBottom.jsx"

const HomeScreen = () => {
    const nav = useNavigate()
    const { data, isLoading } = useGetUser()

    const handlePostButtonClick = () => {
        nav("/post-new")
    }

    return (
        <Container>
            <TitleSection>
                <HomeHeader userData={data} isLoading={isLoading} />
                <CreateContentButton onClick={handlePostButtonClick} />
            </TitleSection>

            <SoriCharacter />

            <BottomSection>
                <HomeBottom />
            </BottomSection>
        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 2.5rem 2.5rem;
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #e6f7f1 30%,
    #b2e7d4 50%,
    #49c48f 100%
  );
`

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
