import styled from "styled-components";
import { useState } from "react";
import { copyText } from "../../utils/copyText.js";
import CopyIcon from "../../assets/img_copy.svg";
import CopyDoneIcon from "../../assets/img_copy_done.svg";

function RecordTextSection({ text, hashtags }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        copyText(text + "\n" + hashtags);
        setCopied(true);
        setTimeout(() => setCopied(false), 5000); // 5초 후 복귀
    };

    return (
        <TextContainer>
            <Label>
                홍보 문구 및 해시태그
                <CopyButton onClick={handleCopy}>
                    <img src={copied ? CopyDoneIcon : CopyIcon} alt="복사" />
                </CopyButton>
            </Label>
            <ContentBox>
                <Text>{text}</Text>
                <HashTag>{hashtags}</HashTag>
            </ContentBox>
        </TextContainer>
    );
}

export default RecordTextSection;

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
`;

const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: bold;
`;

const CopyButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

const ContentBox = styled.div`
    margin-top: 0.5rem;
    padding: 1rem;
    background: #f0faf4;
    border-radius: 16px;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.5;
`;


const Text = styled.div`
    margin-bottom: 2rem;
`;

const HashTag = styled.div`
    color: #007bff;
    font-weight: bold;
    margin-top: 0.5rem;
`;