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
`;


const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #939393;
`;
