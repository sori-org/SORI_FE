import styled from 'styled-components';
import ModifyScreen from "../../components/my/modify/ModifyScreen.jsx";

const ModifyPage = () => {
    return (
        <Container>
            <ModifyScreen />
        </Container>
    );
}

export default ModifyPage;

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
`;