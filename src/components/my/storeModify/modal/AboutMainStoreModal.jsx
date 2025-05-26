import {X} from "lucide-react";
import styled, {keyframes} from "styled-components";


const AboutMainStoreModal = ({ closeModal}) => {

    const handleCloseModal = () => {
        closeModal()
        localStorage.setItem("hasSeenStoreInfo", "true")
    }
    return (
        <ModalOverlay onClick={handleCloseModal}>
            <InfoModal onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>💡 대표 가게 설정 안내</ModalTitle>
                    <CloseButton onClick={handleCloseModal}>
                        <X size={20} />
                    </CloseButton>
                </ModalHeader>
                <ModalContent>
                    <InfoPoint>
                        <strong>대표 가게의 정보가 AI에게 전달됩니다</strong>
                    </InfoPoint>
                    <InfoList>
                        <li>업종, 특징, 주요 서비스 정보</li>
                        <li>더욱 정확하고 맞춤화된 마케팅 문구 생성</li>
                        <li>브랜드에 맞는 톤앤매너 적용</li>
                    </InfoList>
                    <ModalNote>항상 대표 가게의 정보가 반영된 콘텐츠가 만들어져요!</ModalNote>
                </ModalContent>
                <ModalButton onClick={handleCloseModal}>확인했어요</ModalButton>
            </InfoModal>
        </ModalOverlay>
    )
}


export default AboutMainStoreModal;

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


// 모달 스타일
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 1rem;
`

const InfoModal = styled.div`
    background: white;
    border-radius: 16px;
    width: 100%;
    max-width: 360px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    animation: ${fadeIn} 0.3s ease;
    overflow: hidden;
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.5rem 1rem;
    border-bottom: 1px solid #f0f0f0;
`

const ModalTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin: 0;
`

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 4px;
    color: #666;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #f5f5f5;
    }
`

const ModalContent = styled.div`
    padding: 1rem 1.5rem;
`

const InfoPoint = styled.div`
    font-size: 1rem;
    color: #333;
    margin-bottom: 1rem;

    strong {
        color: #49c48f;
    }
`

const InfoList = styled.ul`
    margin: 0 0 1rem 0;
    padding-left: 1.2rem;

    li {
        font-size: 0.9rem;
        color: #555;
        line-height: 1.5;
        margin-bottom: 0.5rem;
    }
`

const ModalNote = styled.div`
    background: #f8f9fa;
    padding: 0.75rem;
    border-radius: 8px;
    font-size: 0.85rem;
    color: #666;
    line-height: 1.4;
`

const ModalButton = styled.button`
    width: 100%;
    padding: 1rem;
    background: #49c48f;
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background: #3db380;
    }
`
