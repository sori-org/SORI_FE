import styled from "styled-components";
import StepOne from "./step/StepOne.jsx";
import StepTwo from "./step/StepTwo.jsx";
import StepThree from "./step/StepThree.jsx";
import useFormStore from "../../store/useFormStore.js";
import StepFour from "./step/StepFour.jsx";
import StepFive from "./step/StepFive.jsx";
import {useNavigate} from "react-router-dom";
import MultiStepFormHeader from "./MultiStepFormHeader.jsx";
import {useControlModal} from "../../hooks/useControlModal.js";
import TipModal from "./modal/TipModal.jsx";
import {tipSlides} from "../../constants/postNew/tipSlides.js";
import StepSix from "./step/StepSix.jsx";
import StepSeven from "./step/StepSeven.jsx";
import {useSubmitFormData} from "../../hooks/mutation/useSubmitFormData.js";

const stepComponents = [StepOne, StepTwo, StepSix, StepSeven, StepThree, StepFour, StepFive];

const steps = stepComponents.map((Component, index) => (
    <Component key={index} />
));

function PostNewScreen() {
    const { currentStepIndex, nextStep, formData } = useFormStore();
    const { modalState, openModal, closeModal } = useControlModal()

    const { mutate: submitForm } = useSubmitFormData();
    const navigate = useNavigate();


    const handleSubmit = () => {
        console.log("제출 버튼 클릭됨. 최종 formData:", formData);
        submitForm(formData, {
            onSuccess: () => {
                console.log("컴포넌트 onSuccess: 제출 성공");
                navigate('/result');
            },
            onError: (error) => {
                console.error("컴포넌트 onError: 제출 실패", error);
            }
        });
    };
    const handleNext = () => {
        nextStep(steps.length);
    };

    const handleTagClick = () => {
        openModal()
    }

    return (
        <Container>
            <HeaderContainer>
                <MultiStepFormHeader />
                {tipSlides[currentStepIndex]?.length > 0 && (
                    <TipSection onClick={handleTagClick}>TIP!</TipSection>
                )}
                {modalState && tipSlides[currentStepIndex]?.length > 0 && <TipModal step={currentStepIndex} onClose={closeModal}/>}
            </HeaderContainer>

            <StepContainer>{steps[currentStepIndex]}</StepContainer>
            <ButtonContainer>
                {currentStepIndex < steps.length - 1 ? (
                    <Button onClick={handleNext}>다음으로</Button>
                ) : (
                    <Button onClick={handleSubmit}>제출</Button>
                )}
            </ButtonContainer>
        </Container>
    );
}

export default PostNewScreen;

const TipSection = styled.button`
    position: absolute;
    bottom: -3rem;
    right: 2rem;
    background-color: #49C48F;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
        background-color: #3AA07B;
    }

    &:active {
        transform: scale(0.96);
    }
`;


const Container = styled.div`
    display: flex;
    height: 95vh;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const HeaderContainer = styled.div`
    width: 100%;
    padding: 0 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StepContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    border-radius: 60px 60px 0 0;
    background: linear-gradient(
            #26957a 3%,
            #49c48f 40%,
            #e0fbe2 100%
    );
`;

const Button = styled.button`
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: white;
    color: #26957a;
    &:active {
        transform: scale(0.98);
    }
`;