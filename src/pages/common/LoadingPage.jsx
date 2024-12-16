import styled, { keyframes } from 'styled-components';
import Loading from '../../assets/sori1.svg';

export default function LoadingPage() {
    return (
        <LoadingContainer>
            <Title>결과물이 만들어지는 중이에요</Title>
            <Image src={Loading} alt="Loading Logo" />
            <DotContainer>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
            </DotContainer>
        </LoadingContainer>
    );
}

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
`;

const DotContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2.4rem;
`;

const dotAnimation = keyframes`
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.3;
        transform: scale(1.3);
    }
`;

const Dot = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    background-color: green;
    border-radius: 50%;
    animation: ${dotAnimation} 1.3s infinite ease-in-out;
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
    &:nth-child(4) { animation-delay: 0.6s; }
    &:nth-child(5) { animation-delay: 0.8s; }
`;

const Image = styled.img`
    width: 128px;
    height: 317px;
    object-fit: contain;
    cursor: pointer;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #033131;
`;