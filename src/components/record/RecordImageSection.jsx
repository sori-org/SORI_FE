import styled from "styled-components";
import { useState } from "react";
import DownloadIcon from "../../assets/img_download.svg";
import DownloadDoneIcon from "../../assets/img_download_done.svg";

function RecordImageSection({ imageUrl }) {
    const [downloaded, setDownloaded] = useState(false);

    const downloadImage = () => {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "record_image.png";
        link.click();

        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 5000); // 5초 후 원래 아이콘으로 복구
    };

    return (
        <ImageContainer>
            <Label>
                이미지
                <IconButton onClick={downloadImage}>
                    <img
                        src={downloaded ? DownloadDoneIcon : DownloadIcon}
                        alt={downloaded ? "다운로드 완료" : "다운로드"}
                    />
                </IconButton>
            </Label>
            <PreviewImage src={imageUrl} alt="결과 이미지" />
        </ImageContainer>
    );
}

export default RecordImageSection;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Label = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`;

const PreviewImage = styled.img`
    padding-top: 0.5rem;
    width: 100%;
    border-radius: 16px;
`;
