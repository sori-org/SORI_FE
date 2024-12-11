import styled from "styled-components";
import MyImage from '../../assets/home_my.svg';
import NoteImage from '../../assets/home_note.svg';
import {useNavigate} from "react-router-dom";


const HomeBottom = () => {
    const nav = useNavigate();

    const isMyPageButtonClicked = () => {
        nav('/mypage');
    }

    const isRecordButtonClicked = () => {
        nav('/record');
    }


    return (
        <Container>
            <Card>
                <CardItem onClick={isMyPageButtonClicked}>
                    <Image src={MyImage}/>
                    <Text>MY</Text>
                </CardItem>
                <Divider />
                <CardItem onClick={isRecordButtonClicked}>
                    <Image src={NoteImage}/>
                    <Text>기록 보기</Text>
                </CardItem>
            </Card>
            <FooterText>사용방법이 궁금해요!</FooterText>
            <FooterLine />
        </Container>
    );
};

export default HomeBottom;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background: transparent;
`;

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 201px;
    max-width: 320px;
    height: 77px;
    padding: 20px;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
`;

const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 50%;
    text-align: center;
`;

const Divider = styled.div`
    width: 1px;
    height: 50px;
    background-color: #E4E4E4;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #939393;
`;

const FooterText = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
`;

const FooterLine = styled.div`
  width: 50%;
  height: 1px;
  background-color: #ffffff;
  margin-top: 8px;
  opacity: 0.5;
`;

const Image = styled.img`
    width: 24px;
    height: 19px;
`;
