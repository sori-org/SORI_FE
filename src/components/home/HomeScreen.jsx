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

            <CharacterSection>
                <SoriCharacter />
            </CharacterSection>

            <BottomSection>
                <HomeBottom />
            </BottomSection>
        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    background: linear-gradient(
            to bottom,
            #ffffff 0%,
            #e6f7f1 30%,
            #b2e7d4 50%,
            #49c48f 100%
    );
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;

    @media (max-width: 768px) {
        min-height: 100dvh;
        padding: 2rem;
    }
`


const TitleSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    flex-shrink: 0;
`

const CharacterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  min-height: 200px;

  @media (max-width: 768px) {
    min-height: 150px;
    flex: 0.8;
  }

  @media (max-width: 480px) {
    min-height: 120px;
    flex: 0.6;
  }
`

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex-shrink: 0;
`
