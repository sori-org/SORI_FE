import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../assets/img_back.svg';
import HomeButton from '../../../assets/img_home_button.svg';

const MyHeader = ({title}) => {
    const nav = useNavigate();
    const handleBack = () => {
        nav(-1);
    };

    return (
        <HeaderContainer>
            <img src={BackButton} alt="뒤로가기" onClick={handleBack} />
            <Title>{title}</Title>
            <Icon onClick={() => nav("/home")}>
                <img src={HomeButton} alt={"홈"}></img>
            </Icon>
        </HeaderContainer>
    );
};

export default MyHeader;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 480px;
    padding: 1.5rem 1.5rem;
    justify-content: space-between; 
`;

const Title = styled.div`
    font-size: 1.25rem;
    font-weight: 700;
    color: black;
`;

const Icon = styled.div`
    object-fit: contain;
`;