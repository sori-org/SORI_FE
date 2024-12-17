import styled from "styled-components";
import useFormStore from "../../store/useFormStore.js";

function ProgressBar({ currentStepIndex, totalSteps }) {
    const progressWidth = ((currentStepIndex + 1) / totalSteps) * 100;

    return (
        <ProgressBarContainer>
            <ProgressFill style={{ width: `${progressWidth}%` }} />
        </ProgressBarContainer>
    );
}

export default function MultiStepFormHeader() {
    const { currentStepIndex } = useFormStore();
    const totalSteps = 5; // 스텝 수

    return (
        <HeaderContainer>
            <ProgressBar currentStepIndex={currentStepIndex} totalSteps={totalSteps} />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 0.5rem;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
`;

const ProgressFill = styled.div`
    height: 100%;
    background-color: #26957a;
    transition: width 0.5s ease-in-out; /* 애니메이션 효과 */
`;