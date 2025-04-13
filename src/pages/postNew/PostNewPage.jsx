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
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
`;