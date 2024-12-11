import styled from 'styled-components';
// import PostNewBanner from "../../assets/postNewBanner.svg";
import PostNewScreen from "../../components/postNew/PostNewScreen.jsx";
import Header from "../../components/common/Header.jsx";

const PostNewPage = () => {
    return (
        <Container>
            {/*<Header />*/}
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