import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from'../../assets/back_button.svg';

const MyHeader = ({title}) => {
    const nav = useNavigate();
    const handleBack = () => {
        nav(-1);
    };

    return (
        <HeaderContainer>
            <img src={BackButton} alt="뒤로가기" onClick={handleBack} />
            <Title>{title}</Title>
            <Icon onClick={() => nav("/")}>
                {/*<img src={}></img>*/ /* 원하는 아이콘을 여기에 추가 */}
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
    padding: 1rem 1rem;
    justify-content: flex-start; 
`;

const Title = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    color: black;
    margin-left: 1rem;
`;

const Icon = styled.div`
    width: 24px;
    height: 24px;
    background-color: #49C48F; /* 원하는 색상으로 변경 */
    border-radius: 50%;
    margin-left: auto; /* 오른쪽으로 밀기 */
`;