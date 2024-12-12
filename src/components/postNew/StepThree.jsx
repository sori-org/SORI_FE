import useFormStore from "../../store/useFormStore.js";
import Sori from "../../assets/sori1.svg";
import styled from "styled-components";
import PostButton from "./PostButton.jsx";
import Webtoon from "../../assets/webtoon.png";
import TextImage from "../../assets/Chat.png";

const options = [
    { title: "택스트 + 이미지", icon: TextImage },
    { title: "네 컷 만화", icon: Webtoon },
];

function StepThree() {
    const { formData, updateFormData } = useFormStore();

    const handleSelect = (result) => {
        updateFormData({ result });
    };

    return (
        <Container>
            <Image src={Sori}/>
            <Title>어떤 결과물을 원하시나요?</Title>
            <ButtonSection>
                {options.map((option) => (
                    <PostButton
                        key={option.title}
                        title={option.title}
                        icon={option.icon}
                        isSelected={formData.result === option.title}
                        onClick={() => handleSelect(option.title)}
                    />
                ))}
            </ButtonSection>
        </Container>
    );
}

export default StepThree;


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