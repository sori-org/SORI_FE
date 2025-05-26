import { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import Loading from "../../assets/sori1.svg"

export default function RealLoadingPage() {
    const [dots, setDots] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev === 5 ? 3 : prev + 1))
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <LoadingContainer>
            <GlowingBackground />

            <ContentWrapper>
                <Title>조금만 기다려주세요...!</Title>

                <ImageWrapper>
                    <GlowEffect />
                    <Image src={Loading || "/placeholder.svg"} alt="Loading Logo" />
                </ImageWrapper>

                <DotContainer>
                    {[...Array(dots)].map((_, i) => (
                        <Dot key={i} />
                    ))}
                </DotContainer>

                <LoadingText>로그인 중</LoadingText>
            </ContentWrapper>
        </LoadingContainer>
    )
}

const dotAnimation = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.3);
  }
`

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

const pulse = keyframes`
  0% { opacity: 0.5; transform: scale(0.8); }
  50% { opacity: 0.8; transform: scale(1.1); }
  100% { opacity: 0.5; transform: scale(0.8); }
`

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  background-color: white;
`

const GlowingBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(152, 209, 156, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
  z-index: 0;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #98D19C;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(152, 209, 156, 0.3);
  letter-spacing: -0.5px;
`

const ImageWrapper = styled.div`
  position: relative;
  animation: ${float} 3s infinite ease-in-out;
`

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(152, 209, 156, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
  animation: ${pulse} 3s infinite ease-in-out;
  z-index: -1;
`

const Image = styled.img`
  width: 128px;
  height: 317px;
  object-fit: contain;
  filter: drop-shadow(0 5px 15px rgba(152, 209, 156, 0.5));
`

const DotContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.4rem;
`

const Dot = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: #98D19C;
  border-radius: 50%;
  animation: ${dotAnimation} 1.3s infinite ease-in-out;
  box-shadow: 0 2px 8px rgba(152, 209, 156, 0.5);
  
  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.6s; }
  &:nth-child(5) { animation-delay: 0.8s; }
`

const LoadingText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #98D19C;
  margin-top: 1.5rem;
  opacity: 0.8;
`
