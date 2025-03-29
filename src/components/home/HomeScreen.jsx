import styled from 'styled-components';
import PostImage from '../../assets/post.svg';
import HomeBottom from "./HomeBottom.jsx";
import {useNavigate} from "react-router-dom";


const HomeScreen = () => {
    const nav = useNavigate();

    const isPostButtonClicked = () => {
        nav('/post-new');
    }


    return (
        <Container>
            <HomeTitleContainer>
                <HomeTitle>
                    <HomeHeader>
                        <BoldText>충영님,</BoldText>
                        <HeaderText>
                            <HighlightText>소리</HighlightText>
                            <NormalText>와 함께</NormalText>
                        </HeaderText>
                        <NormalText>마케팅 컨텐츠를<br/>생성해보세요!</NormalText>
                    </HomeHeader>
                </HomeTitle>
            </HomeTitleContainer>
            <ButtonSection>
                <PostButton onClick={isPostButtonClicked}>
                    <Text>컨텐츠 생성하기</Text>
                    <Image src={PostImage} />
                </PostButton>
            </ButtonSection>
            <BottomSection>
                <HomeBottom />
            </BottomSection>
        </Container>
    );
};

export default HomeScreen;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 2.5rem;
    height: 100vh;
`;

const HomeTitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 6rem;
`;

const HomeTitle = styled.div`
    display: flex;
`;

const HomeHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 1.5;
`;

const HeaderText = styled.div`
    display: flex;
    flex-direction: row;
=`;

const BoldText = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: black;
    line-height: 2;
`;

const HighlightText = styled.p`
    font-size: 26px;
    font-weight: 700;
    color: #1A6F6F;
`;

const NormalText = styled.p`
    font-size: 26px;
    font-weight: 400;
    color: black;
`;

const ButtonSection = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 1rem;
`;

const PostButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #49C48F;
    width: 167px;
    height: 58px;
    border-radius: 30px;
    border: none;
    gap: 0.5rem;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2), 
    0px 4px 8px rgba(0, 0, 0, 0.1); 
    transition: box-shadow 0.2s ease; 

    &:hover {
        box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.3),
        0px 6px 12px rgba(0, 0, 0, 0.15); 
    }

    &:active {
        box-shadow: inset 2px 3px 6px rgba(0, 0, 0, 0.25); 
    }
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
`;

const Image = styled.img`
    width: 24px;
    height: 19px;
`;

const BottomSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: auto; /* 빈 공간을 밀어내 하단에 배치 */
    margin-bottom: -1rem;
`;