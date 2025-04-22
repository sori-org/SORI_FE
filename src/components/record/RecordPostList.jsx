import styled from "styled-components";
import RecordPostItem from "./RecordPostItem.jsx";

function RecordPostList({ posts }) {

    return (
        <Container>
            {posts.map((post) => (
                <RecordPostItem  key={post.content_id} post={post}  />
            ))}
        </Container>
    );
}

export default RecordPostList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
`;
