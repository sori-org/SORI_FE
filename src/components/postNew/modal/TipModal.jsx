import styled from "styled-components";
import { useState } from "react";
import {tipSlides} from "../../../constants/postNew/tipSlides.js";
import ModalPortal from "../../common/modal/ModalPortal.jsx";
import ReactMarkdown from "react-markdown";

function TipModal({step,onClose}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    const slides = tipSlides[step] || [];
    const { title, main_image, title_image, description } = slides[currentIndex];

    return (
        <ModalPortal>
            <Overlay>
                <ModalBox>
                    <CloseButton onClick={onClose}>×</CloseButton>
                    <Content>
                        <Title>
                            <img src={title_image} alt="" />
                            {title}
                        </Title>
                        <ImageBox>
                            <PreviewImage src={main_image} alt="예시 이미지" />
                        </ImageBox>
                        {/*<ImageLabel>(예시 이미지)</ImageLabel>*/}

                        <ReactMarkdown components={{ p: Description }}>
                            {description}
                        </ReactMarkdown>
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
        </ModalPortal>

    );
}

export default TipModal;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.3rem;
    box-sizing: border-box;
`;


const ModalBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    width: 90%;
    max-width: 420px;
    padding: 2rem 1.5rem 3.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    @media (min-width: 768px) {
        padding: 2.5rem 2rem 4rem;
    }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  font-size: 30px;
  background: none;
  border: none;
  color: #1a6f6f;
  cursor: pointer;
`;

const Content = styled.div`
  text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #26957A;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const ImageBox = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
  //position: relative;
`;

const PreviewImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ImageLabel = styled.p`
  font-size: 12px;
  color: #555;
  position: absolute;
  width: 100%;
`;

const Description = styled.p`
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
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
