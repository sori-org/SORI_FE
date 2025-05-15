import styled from 'styled-components';
import RecordDetailScreen from "../../components/record/RecordDetailScreen.jsx";

const RecordDetailPage = () => {
    return (
        <Container>
            <RecordDetailScreen />
        </Container>
    );
}

export default RecordDetailPage;

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
`;