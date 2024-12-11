import styled from "styled-components";

function PostButton({ title, icon }) {
    return (
        <PostButtonContainer>
            <Image src={icon} />
            <Text>{title}</Text>
        </PostButtonContainer>
    );
}

export default PostButton;

const PostButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #49C48F;
    gap: 1rem;
    border-radius: 30px;
    padding: 1rem 2rem;
    cursor: pointer;
    width: 232px;
    height: 81px;
    border: none;
`;

const Image = styled.img`
    width: 29px;
    height: 29px;
`;

const Text = styled.p`
    font-size: 19px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
`;