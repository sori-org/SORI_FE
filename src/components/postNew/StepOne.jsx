import useFormStore from "../../store/useFormStore.js";
import Sori from "../../assets/sori1.svg";
import styled from "styled-components";
import PostButton from "./PostButton.jsx";
import Instagram from "../../assets/instagram.png";
import NaverCafe from "../../assets/naver_cafe.png";
import Twitter from "../../assets/twitter.png";

function StepOne() {
    const {formData, updateFormData} = useFormStore();

    const handleSelect = (platform) => {
        updateFormData({ platform });
    };

    return (
        <Container>
            <Image src={Sori}/>
            <Title>어디에 홍보하고 싶으신가요?</Title>
            <ButtonSection>
                <PostButton title={"인스타그램"} icon={Instagram} />
                <PostButton title={"트위터"} icon={Twitter} />
                <PostButton title={"네이버 카페"} icon={NaverCafe} />
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
`;

const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    gap: 20px;
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