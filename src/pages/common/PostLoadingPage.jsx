import { useState, useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"
import { Sparkles, Brain, Zap, MessageSquare, ImageIcon } from "lucide-react"
import useFormStore from "../../store/useFormStore.js"
import { useNavigate } from "react-router-dom"

export default function PostLoadingPage() {
    const [progress, setProgress] = useState(0)
    const [currentTip, setCurrentTip] = useState(0)
    const [showConfetti, setShowConfetti] = useState(false)
    const { tempContentId, clearTempContentId } = useFormStore()
    const navigate = useNavigate()

    const isMounted = useRef(true)

    const tips = [
        "AI가 당신의 콘텐츠에 맞는 최적의 문구를 찾고 있어요",
        "이미지 생성 중... 당신만의 독특한 스타일을 적용하고 있어요",
        "해시태그를 분석하여 트렌드에 맞게 구성하고 있어요",
        "최종 결과물을 다듬고 있어요, 곧 완성됩니다!",
        "AI가 수천 개의 예시를 학습하여 최상의 결과를 만들고 있어요",
    ]

    const generateConfetti = () => {
        const confetti = []
        for (let i = 0; i < 30; i++) {
            const left = Math.random() * 100
            const animationDuration = 0.5 + Math.random() * 2
            const size = 5 + Math.random() * 10
            confetti.push({ left, animationDuration, size })
        }
        return confetti
    }

    const [confetti, setConfetti] = useState(generateConfetti())

    const getStage = () => {
        if (progress < 25) return "아이디어 분석 중"
        if (progress < 50) return "콘텐츠 생성 중"
        if (progress < 75) return "이미지 최적화 중"
        if (progress < 95) return "마무리 작업 중"
        return "완성 단계"
    }

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (tempContentId) {
                    clearInterval(progressInterval);
                    return 100;
                }
                if (prev >= 99) {
                    return 99;
                }
                return prev + 0.3;
            });
        }, 130);

        return () => clearInterval(progressInterval);
    }, [tempContentId]);

    useEffect(() => {
        if (tempContentId && isMounted.current) {
            navigate(`/result/${tempContentId}`);
            clearTempContentId();
        } else if (progress >= 99 && !tempContentId && isMounted.current) {
            const fallbackTimer = setTimeout(() => {
                if (isMounted.current) {
                    console.warn("LoadingPage: API 응답이 너무 지연되거나 실패했습니다. 홈으로 이동합니다.");
                    navigate("/home");
                }
            }, 50000); // 예를 들어 30초로 늘려보세요.

            return () => clearTimeout(fallbackTimer);
        }
    }, [tempContentId, navigate, progress, clearTempContentId]);


    useEffect(() => {
        const tipInterval = setInterval(() => {
            setCurrentTip((prev) => (prev + 1) % tips.length);
            setShowConfetti(true);

            const confettiTimer = setTimeout(() => {
                if (isMounted.current) {
                    setShowConfetti(false);
                }
            }, 2000);

            if (isMounted.current) {
                setConfetti(generateConfetti());
            }

            return () => clearTimeout(confettiTimer);
        }, 5000);

        return () => {
            isMounted.current = false;
            clearInterval(tipInterval);
        };
    }, [tips.length]);
    return (
        <LoadingContainer>
            {showConfetti && (
                <ConfettiContainer>
                    {confetti.map((c, i) => (
                        <Confetti
                            key={i}
                            style={{
                                left: `${c.left}%`,
                                animationDuration: `${c.animationDuration}s`,
                                width: `${c.size}px`,
                                height: `${c.size}px`,
                            }}
                        />
                    ))}
                </ConfettiContainer>
            )}

            <LogoContainer>
                <PulsingCircle />
                <BrainAnimation>
                    <Sparkles size={40} color="#4CAF50" />
                </BrainAnimation>
            </LogoContainer>

            <Title>AI가 당신의 콘텐츠를 만들고 있어요</Title>
            <Subtitle>{getStage()}</Subtitle>

            <ProgressBarContainer>
                <ProgressBar $progress={progress} />
                <ProgressText>{Math.round(progress)}%</ProgressText>
            </ProgressBarContainer>

            <TipCard>
                <TipIconContainer>
                    <Zap size={20} color="#4CAF50" />
                </TipIconContainer>
                <TipText>{tips[currentTip]}</TipText>
            </TipCard>

            <FloatingElements>
                <FloatingElement $delay={0} $top={20} $left={20}>
                    <Sparkles size={16} color="#4CAF50" />
                </FloatingElement>
                <FloatingElement $delay={1} $top={60} $left={80}>
                    <MessageSquare size={16} color="#4CAF50" />
                </FloatingElement>
                <FloatingElement $delay={2} $top={80} $left={30}>
                    <ImageIcon size={16} color="#4CAF50" />
                </FloatingElement>
                <FloatingElement $delay={3} $top={30} $left={70}>
                    <Brain size={16} color="#4CAF50" />
                </FloatingElement>
            </FloatingElements>
        </LoadingContainer>
    )
}

const pulse = keyframes`
    0% { transform: scale(0.95); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(0.95); opacity: 0.7; }
`

const float = keyframes`
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
`

const breathe = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`

const confettiAnimation = keyframes`
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
`

const floatingAnimation = keyframes`
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(5px, -5px) rotate(5deg); }
    50% { transform: translate(0, -10px) rotate(0deg); }
    75% { transform: translate(-5px, -5px) rotate(-5deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
`

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
`

const LogoContainer = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`

const PulsingCircle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0) 70%);
    animation: ${pulse} 2s infinite ease-in-out;
`

const BrainAnimation = styled.div`
    animation: ${breathe} 3s infinite ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
    text-align: center;
`

const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: #4CAF50;
    margin-bottom: 2rem;
    text-align: center;
`

const ProgressBarContainer = styled.div`
    width: 85%;
    margin-bottom: 2rem;
    position: relative;
`

const ProgressBar = styled.div`
    width: 100%;
    height: 12px;
    background-color: rgba(76, 175, 80, 0.2);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${(props) => props.$progress}%;
        background: linear-gradient(90deg, #4CAF50, #8BC34A);
        border-radius: 10px;
        transition: width 0.3s ease;
    }
`

const ProgressText = styled.div`
    position: absolute;
    right: 0;
    top: -25px;
    font-size: 14px;
    font-weight: 600;
    color: #4CAF50;
`

const TipCard = styled.div`
    background-color: white;
    border-radius: 12px;
    padding: 1.5rem;
    width: 85%;
    margin-bottom: 2rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
`

const TipIconContainer = styled.div`
    background-color: rgba(76, 175, 80, 0.1);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    flex-shrink: 0;
`

const TipText = styled.p`
    font-size: 14px;
    color: #555;
    line-height: 1.5;
    margin: 0;
`

const ConfettiContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
`

const Confetti = styled.div`
    position: absolute;
    top: -10px;
    background-color: #4CAF50;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    opacity: 0.8;
    animation: ${confettiAnimation} 3s forwards linear;

    &:nth-child(even) {
        background-color: #8BC34A;
    }

    &:nth-child(3n) {
        background-color: #CDDC39;
    }

    &:nth-child(4n) {
        background-color: #FFC107;
        border-radius: 50%;
    }
`

const FloatingElements = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
`

const FloatingElement = styled.div`
    position: absolute;
    top: ${(props) => props.$top}%;
    left: ${(props) => props.$left}%;
    animation: ${floatingAnimation} 5s infinite ease-in-out;
    animation-delay: ${(props) => props.$delay}s;
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`
