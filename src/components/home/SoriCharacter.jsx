"use client"

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
    width: 100%;
    height: 100%;
`

const SoriImageAnimation = styled.div`
    animation: ${float} 3s ease-in-out infinite;
`

const Image = styled.img`
    width: 200px;
    height: auto;
    object-fit: contain;

    @media (max-width: 768px) {
        width: 160px;
    }

    @media (max-width: 480px) {
        width: 140px;
    }

    @media (max-width: 360px) {
        width: 120px;
    }
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

    @media (max-width: 768px) {
        width: 5rem;
        height: 1.2rem;
    }

    @media (max-width: 480px) {
        width: 4rem;
        height: 1rem;
    }

    @media (max-width: 360px) {
        width: 3.5rem;
        height: 0.8rem;
    }
`
