import React, {useState} from "react";
import useFormStore from "../../../store/useFormStore.js";
import styled from "styled-components";
import UploadIcon from "../../../assets/upload.png";


function StepFive() {
    const {formData, updateFormData} = useFormStore();
    const [previewImage, setPreviewImage] = useState(null); // 이미지 미리보기 상태
    const [text, setText] = useState("");


    const handleTextChange = (e) => {
        setText(e.target.value);
        updateFormData({text: e.target.value});
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result); // 이미지 미리보기 업데이트
            };
            reader.readAsDataURL(file);
            updateFormData({image: file}); // 전역 상태에 파일 저장
        }
    };

    return (
        <Container>
            <ImageSection>
                <Title>어떤 이미지를 사용할까요?</Title>
                <UploadButton htmlFor="image-upload">
                    {!previewImage && (
                        <>
                            <UploadIconImage src={UploadIcon} alt="업로드 아이콘" />
                            업로드하기
                        </>
                    )}
                    {previewImage && <PreviewImage src={previewImage} alt="미리보기 이미지" />}
                </UploadButton>
                <FileInput
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
            </ImageSection>
            <TextSection>
                <Title>추가 요청사항을 적어주세요!</Title>
                <TextForm
                    placeholder={"ex)고급스러운 느낌으로 만들어주세요"}
                    onChange={handleTextChange}
                    value={text}
                />
            </TextSection>
        </Container>
    );
}

export default StepFive;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
`;

const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

const UploadButton = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* 이미지와 텍스트 사이 간격 */
    width: 292px;
    height: 141px;
    background-color: #e0fbe2;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 600;
    color: #074747;
    cursor: pointer;
    margin-top: 3rem;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
`;

const UploadIconImage = styled.img`
    width: 17px;
    height: 17px;
    object-fit: contain;
`;

const FileInput = styled.input`
    display: none;
`;

const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
`;

const Title = styled.h1`
    font-size: 23px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    margin-top: 4rem;
`;

const TextSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

const TextForm = styled.textarea`
    width: 292px;
    height: 141px;
    background-color: #e0fbe2;
    border: none;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 500;
    color: #000000;
    cursor: pointer;
    margin-top: 2rem;
    padding: 1.5rem;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
`;