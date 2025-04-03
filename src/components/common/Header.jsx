import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from'../../assets/backButton.svg';
import useFormStore from "../../store/useFormStore.js";

const Header = () => {
    const navigate = useNavigate();
    const { currentStepIndex, prevStep } = useFormStore();

    const handleBack = () => {
        if (currentStepIndex === 0) {
            navigate('/'); // 홈으로 이동
        } else {
            prevStep(); // 이전 질문으로 이동
        }
    };

    return (
        <HeaderContainer>
            <BackButtonWrapper onClick={handleBack}>
                <img src={BackButton} alt="뒤로가기" />
            </BackButtonWrapper>
            <Title>{currentStepIndex + 1}/6</Title>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative; 
    width: 100%;
    max-width: 480px;
    height: auto;
    padding-top: 1rem;
    justify-content: center; /* Title을 수평 중앙 정렬 */
`;

const BackButtonWrapper = styled.button`
    position: absolute; /* HeaderContainer 내부에서 절대 위치로 배치 */
    left: 0;
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }
`;

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
`;