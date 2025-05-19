import useFormStore from "../../../store/useFormStore.js";
import Sori from "../../../assets/sori1.svg";
import styled from "styled-components";
import PostButton from "../PostButton.jsx";
import Festival from "../../../assets/festival.png";
import Weather from "../../../assets/weather.png";
import Review from "../../../assets/review.png";
import Trend from "../../../assets/trend.png";
import useMultiSelectHandler from "../../../hooks/useMultiSelectHandler.js";

const options = [
    {title: "날씨 정보", icon: Weather, value: "weather"},
    {title: "리뷰 정보", icon: Review, value: "review"},
    {title: "지역 행사", icon: Festival, value: "festival"},
    {title: "트렌드", icon: Trend, value: "trend"},
];

function StepFour() {
    const {formData} = useFormStore();
    const handleToggleSelect = useMultiSelectHandler("external_sources");

    console.log(formData);
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
                        isSelected={formData.external_sources?.includes(option.value)}
                        onClick={() => handleToggleSelect(option.value)}
                        size="small"
                    />
                ))}
            </ButtonSection>
            <NoneButton onClick={() => handleToggleSelect("__CLEAR__")}>
                선택 안 할래요.
            </NoneButton>
        </Container>
    );
}

export default StepFour;


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

const NoneButton = styled.button`
    margin-top: 1.5rem;
    background: none;
    border: none;
    color: #49C48F;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: ${({ isSelected }) => (isSelected ? "#2F7C60" : "#3A8A63")};
    }

    &:active {
        color: ${({ isSelected }) => (isSelected ? "#25694E" : "#2F7C60")};
        transform: scale(0.98);
        box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
`;
