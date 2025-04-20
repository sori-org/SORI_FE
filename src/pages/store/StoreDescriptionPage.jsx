import styled from 'styled-components';
import StoreDescriptionScreen from "../../components/store/StoreDescriptionScreen.jsx";

const StoreDescriptionPage = () => {
    return (
        <Container>
            <StoreDescriptionScreen />
        </Container>
    );
}

export default StoreDescriptionPage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
`;