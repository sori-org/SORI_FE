import styled from 'styled-components';

const PostNewPage = () => {
    return (
        <Container>
            <div>새 글 쓰기 페이지!</div>
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
    background-color: ${({ theme }) => theme.colors.white};
`;
