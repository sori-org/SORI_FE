import useFormStore from "../../../store/useFormStore.js";
import Sori from "../../../assets/sori1.svg";
import styled from "styled-components";
import PostButton from "../PostButton.jsx";
import Man from "../../../assets/man.svg";
import Woman from "../../../assets/woman.svg";

const options = [
    {title: "여성", icon: Woman},
    {title: "남성", icon: Man},
];

function StepSix() {
    const {formData, updateFormData} = useFormStore();

    const handleSelect = (whichApi) => {
        updateFormData({whichApi});
    };

    return (
        <Container>
            <Image src={Sori}/>
            <Title>타겟층을 선택해주세요!</Title>
            <ButtonSection>
                {options.map((option) => (
                    <PostButton
                        key={option.title}
                        title={option.title}
                        icon={option.icon}
                        isSelected={formData.whichApi === option.title}
                        onClick={() => handleSelect(option.title)}
                    />
                ))}
            </ButtonSection>
        </Container>
    );
}

export default StepSix;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
`;

const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
`;

const Image = styled.img`
    object-fit: contain;
`;

const Title = styled.h1`
    font-size: 23px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    padding-top: 3rem;
`;
