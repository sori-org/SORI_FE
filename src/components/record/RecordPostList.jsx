import styled from "styled-components";
import ArrowIcon from "../../assets/img_arrow_right.svg";

function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function RecordPostList({ posts }) {

    return (
        <Container>
            {posts.map((post) => (
                <PostItem key={post.content_id}>
                    <PostText>
                        <DateText>{formatDate(post.created_at)} 게시물</DateText>
                        <TitleText>{post.title}</TitleText>
                    </PostText>
                    <Icon src={ArrowIcon} />
                </PostItem>
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

const PostItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
`;

const PostText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

const DateText = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: #000;
`;

const TitleText = styled.div`
    font-size: 0.8rem;
    color: #888;
`;

const Icon = styled.img`
    font-size: 1.5rem;
    color: #333;
`;
