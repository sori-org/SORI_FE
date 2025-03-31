import styled from "styled-components";
import StepOne from "../../components/postNew/StepOne";
import StepTwo from "./StepTwo.jsx";
import StepThree from "./StepThree.jsx";
import useFormStore from "../../store/useFormStore.js";
import Header from "../common/Header.jsx";
import StepFour from "./StepFour.jsx";
import StepFive from "./StepFive.jsx";
import ProgressBar from "./ProgressBar.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
    <StepFive />
];

function PostNewScreen() {
    const nav = useNavigate();
    const { currentStepIndex, nextStep, prevStep, resetStep, formData } = useFormStore();

    useEffect(() => {
        resetStep();
    }, []);

    const handleSubmit = () => {
        console.log("최종 제출 데이터:", formData);
        nav("/loading");

        // 5초 후에 결과 페이지로 이동
        setTimeout(() => {
            nav("/result");
        }, 5000);
    };
    const handleNext = () => {
        nextStep(steps.length);
    };

    return (
        <Container>
            <HeaderContainer>
                <Header prevStep={prevStep} currentStepIndex={currentStepIndex} />
                <ProgressBar />
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

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const HeaderContainer = styled.div`
    width: 100%;
    padding: 1rem;
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
    padding: 3rem;
    border-radius: 77px 77px 0 0;
    background: linear-gradient(
            #26957a 3%,
            #49c48f 40%,
            #e0fbe2 100%
    );
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
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