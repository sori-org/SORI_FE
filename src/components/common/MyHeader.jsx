import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from'../../assets/back_button.svg';

const MyHeader = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <HeaderContainer>
            <img src={BackButton} alt="뒤로가기" onClick={handleBack} />
        </HeaderContainer>
    );
};

export default MyHeader;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 480px;
    height: auto;
    padding: 1rem;
    justify-content: flex-start; 
`;
