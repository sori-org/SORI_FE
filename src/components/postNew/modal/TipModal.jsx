import styled from "styled-components";
import { useState } from "react";
import InstagramIcon from "../../../assets/react.svg";
import {tipSlides} from "../../../constants/postNew/tipSlides.js";


function TipModal({step,onClose}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    const slides = tipSlides[step] || [];
    const { title, image, description } = slides[currentIndex];

    return (
        <Overlay>
            <ModalBox>
                <CloseButton onClick={onClose}>×</CloseButton>
                <Content>
                    <Title>
                        <img src={InstagramIcon} alt="" />
                        {title}
                    </Title>
                    <ImageBox>
                        <PreviewImage src={image} alt="예시 이미지" />
                        <ImageLabel>(예시 이미지)</ImageLabel>
                    </ImageBox>
                    <Description>{description}</Description>
                </Content>

                <NavArrow left onClick={goPrev}>◀</NavArrow>
                <NavArrow right onClick={goNext}>▶</NavArrow>

                <DotContainer>
                    {slides.map((_, i) => (
                        <Dot key={i} active={i === currentIndex} />
                    ))}
                </DotContainer>
            </ModalBox>
        </Overlay>
    );
}

export default TipModal;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  background: white;
  border-radius: 20px;
  width: 80%;
  padding: 2rem 1.5rem 3.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 20px;
  background: none;
  border: none;
  color: #1a6f6f;
  cursor: pointer;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #1a6f6f;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const ImageBox = styled.div`
  width: 100%;
  background: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 1rem;
  position: relative;
`;

const PreviewImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ImageLabel = styled.p`
  font-size: 12px;
  color: #555;
  position: absolute;
  bottom: 5px;
  width: 100%;
`;

const Description = styled.p`
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 10px;
  color: #333;
  font-size: 14px;
`;

const NavArrow = styled.div.withConfig({
    shouldForwardProp: (prop) => !['left', 'right'].includes(prop),
})`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #49c48f;
    cursor: pointer;
    user-select: none;

    ${({ left }) => left && `left: -30px;`}
    ${({ right }) => right && `right: -30px;`}
`;


const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'active',
})`
    padding: 5px;
    border-radius: 999px;
    background-color: ${({ active }) => (active ? "#49c48f" : "#ccc")};
`;
