import useFormStore from "../../../store/useFormStore.js";
import Sori from "../../../assets/sori1.svg";
import styled from "styled-components";
import useSelectHandler from "../../../hooks/useSelectHandler.js";

const options = [
    {title: "10~20세", value: "10-20"},
    {title: "20~30세", value: "20-30"},
    {title: "30~40세", value: "30-40"},
    {title: "40세 이상", value: "40+"},
];

function StepSeven() {
    const {formData} = useFormStore();
    const handleSelect = useSelectHandler("ageRangeTarget");

    return (
        <Container>
            <Image src={Sori}/>
            <Title>어떤 정보를 포함할까요?</Title>
            <ButtonSection>
                {options.map((option) => (
                    <SelectButton
                        key={option.title}
                        $isSelected={formData.ageRangeTarget === option.value}
                        onClick={() => handleSelect(option.value)}
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
    padding: 30px;
    background-color: ${({ $isSelected }) => ($isSelected ? "#1D6A47" : "#49C48F")};
    border: 1px solid #49C48F;
    border-radius: 20px;
    cursor: pointer;
    font-size: 18px;
    color: white;
    &:hover {
        background-color: ${({ isSelected }) => (isSelected ? "#2F7C60" : "#3A8A63")};
    }

    &:active {
        background-color: ${({ isSelected }) => (isSelected ? "#25694E" : "#2F7C60")};
        transform: scale(0.98);
        box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
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
