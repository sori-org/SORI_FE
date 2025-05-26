import styled, { keyframes } from "styled-components"
import SoriImage from "../../assets/img_home_sori.svg"

const SoriCharacter = () => {
    return (
        <ImageWrapper>
            <SoriImageAnimation>
                <Image src={SoriImage || "/placeholder.svg"} alt="소리" />
            </SoriImageAnimation>
            <Shadow />
        </ImageWrapper>
    )
}

export default SoriCharacter

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`

const shadowAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(0.9);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SoriImageAnimation = styled.div`
  animation: ${float} 3s ease-in-out infinite;
`

const Image = styled.img`
  object-fit: contain;
`

const Shadow = styled.div`
  width: 6rem;
  height: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  filter: blur(8px);
  border-radius: 100%;
  z-index: 0;
  transform: translateY(-10px);
  animation: ${shadowAnimation} 3s ease-in-out infinite;
`
