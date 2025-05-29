import styled from "styled-components";
import StepOne from "./step/StepOne.jsx";
import StepTwo from "./step/StepTwo.jsx";
import StepFive from "./step/StepFive.jsx";
import useFormStore from "../../store/useFormStore.js";
import StepSix from "./step/StepSix.jsx";
import StepSeven from "./step/StepSeven.jsx";
import {useNavigate} from "react-router-dom";
import MultiStepFormHeader from "./MultiStepFormHeader.jsx";
import {useControlModal} from "../../hooks/useControlModal.js";
import TipModal from "./modal/TipModal.jsx";
import {tipSlides} from "../../constants/postNew/tipSlides.js";
import StepThree from "./step/StepThree.jsx";
import StepFour from "./step/StepFour.jsx";
import {useSubmitFormData} from "../../hooks/mutation/useSubmitFormData.js";
import {useEffect} from "react";
import {useUserStore} from "../../store/useUserStore.js";

const stepComponents = [StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepSeven];

const steps = stepComponents.map((Component, index) => (
    <Component key={index} />
));

function PostNewScreen() {
    const currentStepIndex = useFormStore(state => state.currentStepIndex);
    const nextStep = useFormStore(state => state.nextStep);
    const formData = useFormStore(state => state.formData);
    const storeId = useUserStore(state => state.user?.main_store_id);

    const resetFormData = useFormStore(state => state.resetFormData);
    const updateFormData = useFormStore(state => state.updateFormData);
    const { modalState, openModal, closeModal } = useControlModal()
    const navigate = useNavigate();

    useEffect(() => {
        resetFormData();
        updateFormData({
            store_id: storeId,
        })
    },[storeId, resetFormData, updateFormData])

    const { mutate: submitForm } = useSubmitFormData({
        onSuccess: (data) => {
            console.log("PostNewScreen: 최종 제출 성공, 응답 데이터:", data);
            const contentId = data.content_id;
            if (contentId) {
                navigate(`/result/${contentId}`);
            } else {
                console.warn("API 응답에 content_id가 없습니다. 홈 페이지로 이동합니다.");
                navigate('/home');
            }
        },
        onError: (error) => {
            console.error("PostNewScreen: 최종 제출 실패", error);
            alert("게시물 생성에 실패했습니다. 다시 시도해주세요.");
            resetFormData();
            navigate('/post-new');
        }
    });

    const handleSubmit = () => {
        console.log("제출 버튼 클릭됨. 최종 formData:", formData);

        const payload = {
            store_id: formData.store_id,
            sns_platform: formData.sns_platform,
            promotion_target: formData.promotion_target,
            promotion_name: formData.promotion_name === '' ? null : formData.promotion_name,
            gender_target: formData.gender_target,
            age_range_target: formData.age_range_target,
            content_format: formData.content_format,
            external_sources: formData.external_sources.length === 0 ? null : formData.external_sources,
            user_prompt: formData.user_prompt === '' ? null : formData.user_prompt,
            user_image: formData.user_image === '' ? null : formData.user_image,
        };
        navigate('/post-loading'); // 일단 로딩 페이지로 이동

        submitForm(payload,{
            onSuccess: (data) => {
                const contentId = data.content_id;
                if (contentId) {
                    useFormStore.getState().setTempContentId(contentId);
                } else {
                    console.warn("API 응답에 content_id가 없습니다. 홈 페이지로 이동합니다.");
                    navigate('/home');
                }
            },
            onError: (error) => {
                console.error("PostNewScreen: 최종 제출 실패", error);
                alert("게시물 생성에 실패했습니다. 다시 시도해주세요.");
                navigate('/post-new');
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