import styled from "styled-components";
import useFormStore from "../../store/useFormStore.js";

export default function ProgressBar() {
    const { currentStepIndex, totalSteps } = useFormStore();

    const progressWidth = ((currentStepIndex + 1) / totalSteps) * 100;

    return (
        <ProgressBarContainer>
            <ProgressFill style={{ width: `${progressWidth}%` }} />
        </ProgressBarContainer>
    );
}


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
    transition: width 0.5s ease-in-out;
`;