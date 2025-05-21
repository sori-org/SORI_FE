import styled from "styled-components";
import NoneImageIcon from "../../assets/img_none_img.svg";

function NoneImage() {
    return (
        <ImageContainer>
            <Label>
                이미지
            </Label>
            <PreviewImageSection>
                <Label>사진이 없어요 </Label>
                <img src={NoneImageIcon} alt={"이미지"}/>
            </ PreviewImageSection>
        </ImageContainer>
    );
}

export default NoneImage;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem
`;

const Label = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
`;

const PreviewImageSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    border: 1px dashed #ccc;
    height: 15vh;
    gap: 0.5rem;
`;
