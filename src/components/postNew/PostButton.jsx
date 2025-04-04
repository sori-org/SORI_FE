import styled from "styled-components";

function PostButton({title, icon, onClick, isSelected, size = "large"}) {
    return (
        <PostButtonContainer onClick={onClick} isSelected={isSelected} size={size}>
                <Image src={icon} size={size}/>
            <Text size={size}>{title}</Text>
        </PostButtonContainer>
    );
}

export default PostButton;

const PostButtonContainer = styled.button.attrs(() => ({
    isSelected: undefined,
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({isSelected}) => (isSelected ? "#3AA07B" : "#49C48F")};
    gap: 0.5rem;
    border-radius: 30px;
    cursor: pointer;
    width: ${({size}) => (size === "small" ? "145px" : "232px")};
    height: ${({size}) => (size === "small" ? "100px" : "81px")};
    border: none;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover {
        background-color: ${({isSelected}) => (isSelected ? "#2F7C60" : "#3A8A63")};
    }

    &:active {
        background-color: ${({isSelected}) => (isSelected ? "#25694E" : "#2F7C60")};
        transform: scale(0.98);
        box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
`;

const Image = styled.img`
    width: ${({size}) => (size === "small" ? "30px" : "30px")};
    height: ${({size}) => (size === "small" ? "30px" : "30px")};
`;

const Text = styled.p`
    font-size: ${({size}) => (size === "small" ? "19px" : "19px")};
    font-weight: 600;
    color: white;
`;
