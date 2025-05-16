import Sori from "../../../assets/sori1.svg";
import styled from "styled-components";
import PostButton from "../PostButton.jsx";
import Menu from "../../../assets/menu.png";
import Store from "../../../assets/store.png";
import useFormStore from "../../../store/useFormStore.js";
import useSelectHandler from "../../../hooks/useSelectHandler.js";

const options = [
    {title: "가게", icon: Store, value: "store"},
    {title: "메뉴", icon: Menu, value: "menu"},
];


function StepTwo() {
    const { formData, updateFormData } = useFormStore();
    const handleSelect = useSelectHandler("promotionTarget");

    console.log(formData);

    return (
        <Container>
            <Image src={Sori}/>
            <Title>무엇을 홍보하고 싶으신가요?</Title>
            <ButtonSection>
                {options.map((option) => (
                    <PostButton
                        key={option.title}
                        title={option.title}
                        icon={option.icon}
                        isSelected={formData.promotionTarget=== option.title}
                        onClick={() => handleSelect(option.value)}
                    />
                ))}
            </ButtonSection>
            {formData.promotionTarget === "menu" && (
                <InputContainer>
                    <Label>🍜 홍보할 메뉴명을 입력해주세요.</Label>
                    <Input
                        type="text"
                        value={formData.promotionName || ''}
                        onChange={(e) => updateFormData({promotionName: e.target.value})}
                        placeholder="예: 소고기덮밥"
                    />
                </InputContainer>
            )}
        </Container>
    );
}

export default StepTwo;


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
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 2rem;
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

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-top: 2rem;
`;

const Input = styled.input`
    width: 50%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
`;

const Label = styled.label`
    font-size: 16px;
    font-weight: 600;
`;
