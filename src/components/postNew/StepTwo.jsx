import Sori from "../../assets/sori1.svg";
import styled from "styled-components";
import PostButton from "./PostButton.jsx";
import Menu from "../../assets/menu.png";
import Store from "../../assets/store.png";
import useFormStore from "../../store/useFormStore.js";

const options = [
    {title: "가게", icon: Store},
    {title: "메뉴", icon: Menu},
];


function StepTwo() {
    const { formData, updateFormData } = useFormStore();

    const handleSelect = (item) => {
        updateFormData({ item });
    };

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
                        isSelected={formData.item === option.title}
                        onClick={() => handleSelect(option.title)} // 선택 시 부모 컴포넌트에 값 전달
                    />
                ))}
            </ButtonSection>
        </Container>
    );
}

export default StepTwo;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: auto;
    margin-top: 4rem;
`;

const Image = styled.img`
    width: 89px;
    height: 138px;
    object-fit: contain;
`;

const Title = styled.h1`
    font-size: 23px;
    font-weight: 600;
    width: 100%;
    height: auto;
    margin-top: 4rem;

`;