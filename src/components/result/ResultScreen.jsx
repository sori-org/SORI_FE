import styled from "styled-components";;
import useFormStore from "../../store/useFormStore.js";
import Home from "../../assets/result_home.png";
import Share from "../../assets/share.png";
import DownLoad from "../../assets/result_download.png";
import {useLocation, useNavigate} from "react-router-dom";
import ResultImage from "../../assets/result_image.png";

function ResultScreen() {
    const nav = useNavigate();
    const location = useLocation();
    // const { formData } = useFormStore();

    const handleHome = () => {
        nav("/");
    }

    const handleCopyLink = async () => {
        const baseUrl = window.location.origin;
        const currentUrl = `${baseUrl}${location.pathname}`;

        try {
            await navigator.clipboard.writeText(currentUrl);
            alert("링크가 클립보드에 복사되었습니다!");
        } catch (err) {
            console.error("링크 복사에 실패했습니다.", err);
            alert("링크 복사에 실패했습니다. 다시 시도해주세요.");
        }
    };


    return (
        <Container>
            <MainTitle>완성된 결과물이에요!</MainTitle>
            <StepContainer>
                <ImageContainer>
                    <Title>이미지</Title>
                    <ImageSection src={ResultImage} />
                </ImageContainer>
                <TextContainer>
                    <Title>홍보문구 및 해시태그</Title>
                    <TextSection>{"여기여기☝️카공족들의 완벽한 피난처 발견했음ㅎㅎ\n\n모퉁(Motoong)이라는 이 카페, 인테리어가 완전 힙하대요.😎 약간의 구름이 낀 날씨에도 아늑한 분위기 뿜뿜! 특히 초록초록한 식물들이 눈을 편안하게 해줌🌿🌿\n\n우리들의 피곤한 눈과 몸을 힐링 시켜줄 뿐만 아니라 세련된 바 공간에서 친구들이랑 한잔 하기도 좋음😉 나만 알고 싶은 신상 핫플이지만, 친구들과 함께하는 시간이 더 소중한 법‼️\n\n말 그대로 디자인이며 분위기며 완벽한 타이밍에 방문하게 된 케이스💕 방금 솟구친 기운으로 하루 시작각각🌞\n\n\#모퉁 #카페추천 #성남맛집 #힐링카페 #카페투어 #인테리어맛집 #카공족성지 #친구와함께"}</TextSection>
                </TextContainer>
            </StepContainer>
            <ButtonContainer>
                <ButtonSection>
                    <Image src={Share} onClick={handleCopyLink} ></Image>
                    <ButtonText>공유하기</ButtonText>
                </ButtonSection>
                <ButtonSection>
                    <Image src={DownLoad}></Image>
                    <ButtonText>저장하기</ButtonText>
                </ButtonSection>
                <ButtonSection onClick={handleHome}>
                    <Image src={Home}></Image>
                    <ButtonText>홈</ButtonText>
                </ButtonSection>
            </ButtonContainer>
        </Container>
    );
}

export default ResultScreen;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;


const StepContainer = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-around;
    padding: 0 2rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    border-radius: 77px 77px 0 0;
    background: linear-gradient(
            #26957a 3%,
            #49c48f 60%,
            #e0fbe2 100%
    );
`;

const ButtonText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    &:active {
        transform: scale(0.98);
    }
`;

const ButtonSection = styled.button`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none; 
    border: none; 
    gap: 13px;
`;

const Image = styled.img`
    width: 35px;
    height: 35px;
    object-fit: contain;
    cursor: pointer;
`;
const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    margin-top: 3rem;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    
`;

const ImageSection = styled.img`
    width: 100%;
    height: 30vh;
    background-color: #E0FBE2;
    border-radius: 20px;
    margin-top: 2rem;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    object-fit: contain;
`;

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;

`;

const TextSection = styled.pre`
    width: 100%;
    height: 200px;
    background-color: #E0FBE2;
    border-radius: 20px;
    margin-top: 2rem;
    border: none;
    padding: 1rem;
    font-size: 15px;
    font-weight: 400;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    white-space: pre-wrap; /* 줄바꿈 처리 */
    overflow-y: auto;

`;


const MainTitle = styled.h1`
    font-size: 30px;
    font-weight: 600;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;