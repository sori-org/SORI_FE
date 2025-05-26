import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { tipSlides } from "../../../constants/postNew/tipSlides.js"
import ModalPortal from "../../common/modal/ModalPortal.jsx"
import ReactMarkdown from "react-markdown"
import { motion, AnimatePresence } from "framer-motion"

function TipModal({ step, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const slides = tipSlides[step] || []
    const { title, main_image, icon, description } = slides[currentIndex] || {}

    const goPrev = () => {
        if (isAnimating) return
        setDirection(-1)
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const goNext = () => {
        if (isAnimating) return
        setDirection(1)
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false)
        }, 500)
        return () => clearTimeout(timer)
    }, [currentIndex])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") goPrev()
            if (e.key === "ArrowRight") goNext()
            if (e.key === "Escape") onClose()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isAnimating, goPrev, goNext, onClose]); // 의존성 추가

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) goNext()
        }, 10000)

        return () => clearInterval(interval)
    }, [isAnimating, currentIndex, goNext]); // 의존성 추가

    return (
        <ModalPortal>
            <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
                <ModalBox
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                    <CloseButton onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 6L6 18M6 6L18 18"
                                stroke="#26957A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </CloseButton>

                    <ProgressBar>
                        <Progress style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }} />
                    </ProgressBar>

                    <Content>
                        <TitleContainer>
                            <IconWrapper>{React.createElement(icon, { size: 28, color: "#26957A" })}</IconWrapper>
                            <Title>{title}</Title>
                        </TitleContainer>

                        <SlideContainer>
                            <AnimatePresence custom={direction} mode="wait">
                                <ImageBox
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: "tween", duration: 0.5 }}
                                >
                                    <PreviewImage src={main_image || "/placeholder.svg"} alt="예시 이미지" />
                                    <ImageGradient />
                                </ImageBox>
                            </AnimatePresence>
                        </SlideContainer>

                        <DescriptionContainer>
                            <ReactMarkdown components={{ p: Description }}>{description}</ReactMarkdown>
                        </DescriptionContainer>
                    </Content>

                    <NavigationContainer>
                        <NavArrow onClick={goPrev} aria-label="이전 팁">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#F5F5F5" />
                                <path
                                    d="M15 18L9 12L15 6"
                                    stroke="#26957A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavArrow>

                        <DotContainer>
                            {slides.map((_, i) => (
                                <Dot
                                    key={i}
                                    active={i === currentIndex}
                                    onClick={() => {
                                        if (isAnimating) return
                                        setDirection(i > currentIndex ? 1 : -1)
                                        setIsAnimating(true)
                                        setCurrentIndex(i)
                                    }}
                                />
                            ))}
                        </DotContainer>

                        <NavArrow onClick={goNext} aria-label="다음 팁">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#F5F5F5" />
                                <path
                                    d="M9 6L15 12L9 18"
                                    stroke="#26957A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavArrow>
                    </NavigationContainer>

                    <SlideCounter>
                        <CurrentSlide>{currentIndex + 1}</CurrentSlide>
                        <TotalSlides>/ {slides.length}</TotalSlides>
                    </SlideCounter>
                </ModalBox>
            </Overlay>
        </ModalPortal>
    )
}

export default TipModal

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
    }),
}

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const progressAnimation = keyframes`
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
`

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.3rem;
    box-sizing: border-box;
`

const ModalBox = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 24px;
    width: 90%;
    max-width: 420px;
    padding: 2.5rem 1.5rem 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    @media (min-width: 768px) {
        padding: 3rem 2rem 2.5rem;
    }
`

const ProgressBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #f0f0f0;
`

const Progress = styled.div`
    height: 100%;
    background: linear-gradient(90deg, #26957A, #49c48f);
    transition: width 0.3s ease;
    transform-origin: left;
    animation: ${progressAnimation} 0.5s ease;
`

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
        background-color: rgba(38, 149, 122, 0.1);
    }
`

const Content = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    animation: ${fadeIn} 0.5s ease;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 1.8rem;
`

const Title = styled.h2`
    color: #26957A;
    font-size: 22px;
    font-weight: 800;
    margin: 0;
`

const SlideContainer = styled.div`
    width: 100%;
    height: 35vh;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageBox = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
`

const PreviewImage = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    ${ImageBox}:hover & {
        transform: scale(1.05);
    }
`

const ImageGradient = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
`

const DescriptionContainer = styled.div`
    width: 100%;
    margin-bottom: 1.5rem;
`

const Description = styled.p`
    background: linear-gradient(to right, #f8f8f8, #f0f0f0, #f8f8f8);
    background-size: 800px 104px;
    padding: 1.2rem;
    border-radius: 16px;
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 500;
    color: #333;
    margin: 0;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.03);

    strong {
        color: #26957A;
    }
`

const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
`

const NavArrow = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }
`

const DotContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
`

const Dot = styled.button`
    width: ${({ active }) => (active ? "24px" : "8px")};
    height: 8px;
    border-radius: 999px;
    background-color: ${({ active }) => (active ? "#26957A" : "#e0e0e0")};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ active }) => (active ? "#26957A" : "#ccc")};
    }
`

const SlideCounter = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-weight: 600;
`

const CurrentSlide = styled.span`
    color: #26957A;
    font-size: 1rem;
`

const TotalSlides = styled.span`
    color: #999;
    font-size: 1rem;
    margin-left: 0.1rem;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
`