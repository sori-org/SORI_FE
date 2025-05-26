import useFormStore from "../../../store/useFormStore.js";
import Sori from "../../../assets/sori1.svg";
import styled from "styled-components";
import PostButton from "../PostButton.jsx";
import Instagram from "../../../assets/instagram.png";
import NaverCafe from "../../../assets/naver_cafe.png";
import Twitter from "../../../assets/twitter.png";
import useSelectHandler from "../../../hooks/useSelectHandler.js";

const options = [
    { title: "인스타그램", icon: Instagram, value: "instagram"} ,
    { title: "트위터", icon: Twitter, value: "twitter"},
    { title: "네이버 카페", icon: NaverCafe, value: "naver_cafe"},
];


function StepOne() {
    const { formData } = useFormStore();
    const handleSelect = useSelectHandler("sns_platform");

    return (
        <Container>
            <Image src={Sori} />
            <Title>어디에 홍보하고 싶으신가요?</Title>
            <ButtonSection>
                {options.map((option) => (
                    <PostButton
                        key={option.title}
                        title={option.title}
                        icon={option.icon}
                        isSelected={formData.snsPlatform === option.title}
                        onClick={() => handleSelect(option.value)}
                    />
                ))}
            </ButtonSection>
        </Container>
    );
}

export default StepOne;

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
    gap: 1rem;
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