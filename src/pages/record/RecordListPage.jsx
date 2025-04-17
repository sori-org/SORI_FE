import styled from 'styled-components';
import RecordListScreen from "../../components/record/RecordListScreen.jsx";

const RecordListPage = () => {
    return (
        <Container>
            <RecordListScreen />
        </Container>
    );
}

export default RecordListPage;

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
`;