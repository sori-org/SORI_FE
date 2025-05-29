import styled from "styled-components";
import MyImage from '../../assets/home_my.svg';
import NoteImage from '../../assets/home_note.svg';
import {useNavigate} from "react-router-dom";


const HomeBottom = () => {
    const nav = useNavigate();

    return (
        <Container>
            <Card>
                <CardItem onClick={() => nav('/mypage')}>
                    <img src={MyImage} alt="마이페이지" />
                    <Text>MY</Text>
                </CardItem>
                <CardItem onClick={() => nav('/record')}>
                    <img src={NoteImage} alt="기록 보기" />
                    <Text>기록</Text>
                </CardItem>
            </Card>
        </Container>
    );
};


export default HomeBottom;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-radius: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
`;

const CardItem = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 40px;
    cursor: pointer;
    background-color: transparent; 
    border: none; 
    outline: none; 
    transition: transform 0.1s ease-out, background-color 0.1s ease-out;
    border-radius: 20px;

    &:active {
        transform: scale(0.95);
        background-color: #f0f0f0; 
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2); / 안으로 눌리는 그림자 효과 
    }

    &:focus-visible {
        outline: 2px solid #49C48F;
        outline-offset: 2px;
    }
`;


const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #939393;
    margin-top: 8px;
`;