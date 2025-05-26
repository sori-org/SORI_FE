import styled, { keyframes } from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import KakaoImage from "../../assets/img_kakao.svg"
import RabbitImage from "../../assets/img_profile.svg"
import SoundImage from "../../assets/img_sound.svg"

function LoginPage() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        const user = localStorage.getItem("user")

        if (!token || !user) {
            navigate("/") // 비로그인 상태 → 로그인 페이지
        } else {
            navigate("/home") // 홈으로 이동
        }
    }, [navigate])

    const handleKakaoLogin = () => {
        setIsLoading(true)
        const KAKAO_JAVASCRIPT_KEY = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
        const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI

        // 약간의 지연을 두어 로딩 상태를 보여줌
        setTimeout(() => {
            window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_JAVASCRIPT_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
        }, 500)
    }

    return (
        <Container>
            <BackgroundDecoration />
            <ContentWrapper>
                <LogoSection>
                    <ProfileImageWrapper>
                        <ProfileImage src={RabbitImage || "/placeholder.svg"} alt="토끼" />
                        <ImageShadow />
                    </ProfileImageWrapper>

                    <WelcomeText>환영합니다!</WelcomeText>

                    <TitleSection>
                        <SoundIcon src={SoundImage || "/placeholder.svg"} alt="소리" />
                        <Title>
                            <Highlight>소리</Highlight>와 함께
                        </Title>
                    </TitleSection>

                    <Subtitle>AI로 쉽고 빠른 마케팅 콘텐츠 제작</Subtitle>
                </LogoSection>

                <LoginSection>
                    <LoginButton onClick={handleKakaoLogin} disabled={isLoading}>
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <ButtonContent>
                                <KakaoIcon src={KakaoImage} alt="카카오" />
                            </ButtonContent>
                        )}
                    </LoginButton>
                </LoginSection>
            </ContentWrapper>
        </Container>
    )
}

export default LoginPage

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0px); }
`

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const pulse = keyframes`
    0% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.02); opacity: 0.4; }
    100% { transform: scale(1); opacity: 0.6; }
`

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(
            180deg,
            #f8fffe 0%,
            #e8f5f1 30%,
            #d4edda 60%,
            #c3e6cb 100%
    );
`

const BackgroundDecoration = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
            radial-gradient(circle at 30% 20%, rgba(73, 196, 143, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 70% 80%, rgba(38, 149, 122, 0.06) 0%, transparent 40%);
    pointer-events: none;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2.5rem 2rem 2rem;
    box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.06),
            0 0 0 1px rgba(255, 255, 255, 0.8);
    animation: ${fadeInUp} 1s ease;
    max-width: 360px;
    width: 90%;
    margin: 0 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
`

const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`

const ProfileImageWrapper = styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    animation: ${float} 3s ease-in-out infinite;
`

const ProfileImage = styled.img`
    width: 70px;
    height: 70px;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08));
`

const ImageShadow = styled.div`
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 15px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    filter: blur(8px);
    animation: ${pulse} 3s ease-in-out infinite;
`

const WelcomeText = styled.p`
    font-size: 1rem;
    color: #5a6c57;
    margin: 0 0 1.2rem 0;
    font-weight: 400;
    letter-spacing: 0.3px;
`

const TitleSection = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`

const SoundIcon = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
`

const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    color: #2d3e2a;
    margin: 0;
    display: flex;
    align-items: center;
    letter-spacing: -0.5px;
`

const Highlight = styled.span`
    color: #49c48f;
    font-weight: 600;
    text-shadow: none;
`

const Subtitle = styled.p`
    font-size: 0.9rem;
    color: #6b7c68;
    text-align: center;
    margin: 0.5rem 0 0 0;
    line-height: 1.5;
    font-weight: 300;
`

const LoginSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const LoginButton = styled.button`
    width: 100%;
    max-width: 260px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fee500 0%, #ffd54f 100%);
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(254, 229, 0, 0.2);
    position: relative;
    overflow: hidden;

    &:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(254, 229, 0, 0.25);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

const ButtonContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    height: 100%;
`

const KakaoIcon = styled.img`
    width: 100%;
    align-items: center;
    justify-content: center;
    object-fit: contain;
`

const LoadingSpinner = styled.div`
    width: 24px;
    height: 24px;
    border: 3px solid #3c1e1e;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`
