import styled from 'styled-components';
import PostNewScreen from "../../components/postNew/PostNewScreen.jsx";

const PostNewPage = () => {
    return (
        <Container>
            <PostNewScreen />
        </Container>
    );
}

export default PostNewPage;

const Container = styled.div`
    width: 100%;
    max-width: 480px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
`;