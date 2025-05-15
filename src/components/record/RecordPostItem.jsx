import styled from "styled-components";
import ArrowIcon from "../../assets/img_arrow_right.svg";
import { useNavigate } from "react-router-dom";
import {formatDate} from "../../utils/formatDate.js";

function RecordPostItem({ post }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/record/${post.content_id}`);
    };

    return (
        <PostItem onClick={handleClick}>
            <InfoSection>
                <PostText>
                    <DateText>{formatDate(post.created_at)} 게시물</DateText>
                    <TitleText>{post.title}</TitleText>
                    <StoreText>{post.store_name}</StoreText>
                </PostText>
            </InfoSection>
            <Icon src={ArrowIcon} />
        </PostItem>
    );
}

export default RecordPostItem;

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

const StoreText = styled.div`
    font-size: 0.8rem;
    color: #888;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
    width: 100%;
`;

const Icon = styled.img`
    font-size: 1.5rem;
    color: #333;
`;
