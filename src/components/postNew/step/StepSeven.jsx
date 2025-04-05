import useFormStore from "../../../store/useFormStore.js";
import Sori from "../../../assets/sori1.svg";
import styled from "styled-components";

const options = [
    {title: "10~20세"},
    {title: "20~30세"},
    {title: "30~40세"},
    {title: "40세 이상"},
];

function StepSeven() {
    const {formData, updateFormData} = useFormStore();

    const handleSelect = (whichApi) => {
        updateFormData({whichApi});
    };

    return (
        <Container>
            <Image src={Sori}/>
            <Title>어떤 정보를 포함할까요?</Title>
            <ButtonSection>
                {options.map((option) => (
                    <SelectButton
                        key={option.title}
                        isSelected={formData.whichApi === option.title}
                        onClick={() => handleSelect(option.title)}
                    >
                        {option.title}
                    </SelectButton>
                ))}
            </ButtonSection>
        </Container>
    );
}

export default StepSeven;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 10px 0;
`;

const ButtonSection = styled.div`
    width: 85%;
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 2개씩 한 줄에
    row-gap: 20px;
    padding-top: 3rem;
    justify-items: center
`;

const SelectButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 20px;
    background-color: #49C48F;
    border: 1px solid #49C48F;
    border-radius: 20px;
    cursor: pointer;
    font-size: 19px;
    color: white;
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
