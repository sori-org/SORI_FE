import styled from 'styled-components';
import StepOne from '../../components/postNew/StepOne';
import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import StepTwo from "./StepTwo.jsx";
import useFormStore from "../../store/useFormStore.js";
import Header from "../common/Header.jsx";

function PostNewScreen() {
    const { formData, setFormData } = useFormStore();

    const steps = [
        <StepOne />,
        <StepTwo />,
    ];

    const { currentStepIndex, step, nextStep, prevStep } = useMultiStepForm(steps);

    const handleSubmit = () => {
        console.log("최종 제출 데이터:", formData);
    };

    return (
        <Container>
            <HeaderContainer>
                <Header prevStep={prevStep} currentStepIndex={currentStepIndex} />
            </HeaderContainer>
            <StepContainer>
                {step}
            </StepContainer>
            <ButtonContainer>
                {currentStepIndex < steps.length - 1 ? (
                    <Button onClick={nextStep}>다음으로</Button>
                ) : (
                    <Button onClick={handleSubmit}>제출</Button>
                )}
            </ButtonContainer>
        </Container>
    );
}

export default PostNewScreen;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    height: 100vh; 
`;

const HeaderContainer = styled.div`
    width: 100%;
    max-width: 480px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StepContainer = styled.div`
    flex: 1; /* 남은 공간을 유연하게 차지 */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: space-between;
    margin-top: 4rem;
    
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 15vh;
    border-radius: 77px 77px 0 0;
    background: linear-gradient(
            #26957A 3%,  /* 첫 번째 색상 */
            #49C48F 40%, /* 두 번째 색상 */
            #E0FBE2 100%  /* 세 번째 색상 */
    );
`;

const Button = styled.button`
    width: 109px;
    height: 34px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: white;
    color: #26957A;
    //transition: all 0.2s ease;

    &:active {
        transform: scale(0.98); /* 클릭 시 살짝 눌림 효과 */
    }
`;