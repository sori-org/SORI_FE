import useFormStore from "../../store/useFormStore.js";
import Sori from "../../assets/sori1.svg";
import styled from "styled-components";
import PostButton from "./PostButton.jsx";
import Webtoon from "../../assets/webtoon.png";
import TextImage from "../../assets/Chat.png";
import PreviewImage from "../../assets/preview.png";

const options = [
    {title: "기상 정보", icon: TextImage},
    {title: "리뷰 정보", icon: Webtoon},
    {title: "행사 정보", icon: Webtoon},
    {title: "최신 밈", icon: Webtoon},
];

function StepFour() {
    const {formData, updateFormData} = useFormStore();

    const handleSelect = (whichApi) => {
        updateFormData({whichApi});
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
                        isSelected={formData.whichApi === option.title}
                        onClick={() => handleSelect(option.title)}
                        size="small"
                    />
                ))}
            </ButtonSection>
            <PreviewSection>
                <Image2 src={PreviewImage} />
                <Title2>결과 미리보기</Title2>
            </PreviewSection>
        </Container>
    );
}

export default StepFour;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
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
    display: flex;
    align-items: center;
    justify-content: center;

`;

const PreviewSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    margin-top: 2rem;
    gap: 10px;
`;

const Image2 = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;

`;

const Title2 = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #49C48F;

`;