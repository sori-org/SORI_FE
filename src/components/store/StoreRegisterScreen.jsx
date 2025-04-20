import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SoriImg from "../../assets/img_register.svg";
import SearchSection from "./SearchSection";
import StoreInfoPreview from "./StoreInfoPreview";

function StoreRegisterScreen() {
    const { register, handleSubmit, setValue, watch } = useForm();
    const navigate = useNavigate();
    const [results, setResults] = useState([]);

    const onSubmit = (data) => {
        console.log("가게 등록 정보:", data);
        navigate("/register/description", { state: data });
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Icon src={SoriImg} alt="소리 이미지" />
            <Title>
                <Highlight>소리</Highlight>에서 사용할
            </Title>
            <Title>가게를 등록해주세요!</Title>

            <SearchSection setValue={setValue} setResults={setResults} results={results} />
            <StoreInfoPreview register={register} />

            <SubmitButton type="submit">다음</SubmitButton>
        </Container>
    );
}

export default StoreRegisterScreen;

const Container = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding: 2rem;
    gap: 1rem;
`;

const Icon = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin: 0 auto;
`;

const Highlight = styled.p`
    color: #49c48f;
    font-weight: 800;
    font-size: 1.6rem;
`;

const Title = styled.div`
    display: flex;
    font-size: 1.5rem;
    font-weight: 700;
    align-items: center;
`;

const SubmitButton = styled.button`
    margin-top: 1rem;
    padding: 1rem;
    font-size: 1rem;
    background-color: #49c48f;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: #3ca377;
    }
`;
