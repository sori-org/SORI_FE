import styled from 'styled-components';
import StoreModifyScreen from "../../components/my/storeModify/StoreModifyScreen.jsx";

const StoreModifyPage = () => {
    return (
        <Container>
            <StoreModifyScreen />
        </Container>
    );
}

export default StoreModifyPage;

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
`;