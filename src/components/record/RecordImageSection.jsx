import styled from "styled-components";
import { useState } from "react";
import DownloadIcon from "../../assets/img_download.svg";
import DownloadDoneIcon from "../../assets/img_download_done.svg";
import {downloadImage} from "../../utils/downloadImage.js";

function RecordImageSection({ imageUrl }) {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownloadImage =  () => {
        downloadImage(imageUrl, setDownloaded);
    };


    return (
        <ImageContainer>
            <Label>
                이미지
                <IconButton onClick={handleDownloadImage}>
                    <img
                        src={downloaded ? DownloadDoneIcon : DownloadIcon}
                        alt={downloaded ? "다운로드 완료" : "다운로드"}
                    />
                </IconButton>
            </Label>
            <ImageSection>
                <PreviewImage src={imageUrl} alt="결과 이미지" />
            </ImageSection>
        </ImageContainer>
    );
}

export default RecordImageSection;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
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
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
`;

const ImageSection = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
        height: auto;
        max-height: 60vh;
    }
`;
