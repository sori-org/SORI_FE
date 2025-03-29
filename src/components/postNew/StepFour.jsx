import useFormStore from "../../store/useFormStore.js";
import Sori from "../../assets/sori1.svg";
import styled from "styled-components";
import PostButton from "./PostButton.jsx";
import Festival from "../../assets/festival.png";
import Weather from "../../assets/weather.png";
import Review from "../../assets/review.png";
import Trend from "../../assets/trend.png";
import PreviewImage from "../../assets/preview.png"

const options = [
    {title: "날씨 정보", icon: Weather},
    {title: "리뷰 정보", icon: Review},
    {title: "지역 행사", icon: Festival},
    {title: "트렌드", icon: Trend},
];

function StepFour() {
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
    margin-bottom: 1rem;
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