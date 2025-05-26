import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../assets/img_back.svg';
import useFormStore from "../../../store/useFormStore.js";
import HomeButton from "../../../assets/img_home_button.svg";

const PostHeader = () => {
    const navigate = useNavigate();
    const { currentStepIndex, prevStep } = useFormStore();

    const handleBack = () => {
        if (currentStepIndex === 0) {
            navigate('/home');
        } else {
            prevStep();
        }
    };

    return (
        <HeaderContainer>
            <LeftSection onClick={handleBack}>
                <img src={BackButton} alt="뒤로가기" />
            </LeftSection>
            <CenterSection>{currentStepIndex + 1}/7</CenterSection>
            <RightSection onClick={() => navigate("/home")}>
                <img src={HomeButton} alt={"홈"}></img>
            </RightSection>
        </HeaderContainer>
    );
};

export default PostHeader;

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr; // 좌-중앙-우
    align-items: center;
    width: 100%;
    max-width: 480px;
    height: auto;
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    padding: 1rem 1.5rem;
    z-index: 500;
    background-color: white;
`;

const LeftSection = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    justify-self: start;

    img {
        object-fit: contain;
    }
`;

const CenterSection = styled.div`
    justify-self: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
`;

const RightSection = styled.div`
  justify-self: end;
`;

