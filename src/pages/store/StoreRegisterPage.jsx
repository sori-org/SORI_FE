import { useState } from "react";
import { useForm } from "react-hook-form";
import { searchPlaceByKeyword } from "../../apis/naver/searchPlaceByKeyword.js";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Sori from "../../assets/img_home_sori.svg"

function StoreRegisterPage() {
    const { register, handleSubmit, setValue } = useForm();
    const nav = useNavigate();
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState([]);

    const onSearch = async () => {
        if (!keyword) return;
        const res = await searchPlaceByKeyword(keyword);
        setResults(res);
    };

    const stripHTML = (html) => html.replace(/<[^>]+>/g, "");

    const handleSelect = (place) => {
        setValue("storeName", stripHTML(place.title));
        setValue("category", place.category);
        setValue("description", place.description || "(설명 없음)");
        setValue("location", place.roadAddress || place.address);
        setResults([]); // 선택하면 리스트 닫기
    };

    const onSubmit = (data) => {
        console.log(" 등록된 가게 정보:", data);
        nav("/home");
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Icon src={Sori}/>
            <Title>소리에서 사용할 <br/> 가게를 등록해주세요!</Title>
            <Label>가게 키워드 검색</Label>
            <SearchBox>
                <Input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="ex) 소리네카페"
                />
                <SearchButton type="button" onClick={onSearch}>검색</SearchButton>
            </SearchBox>

            {results.length > 0 && (
                <ResultList>
                    {results.map((place, idx) => (
                        <ResultItem key={idx} onClick={() => handleSelect(place)}>
                            <PlaceName>{stripHTML(place.title)}</PlaceName>
                            <PlaceAddress>{place.roadAddress || place.address}</PlaceAddress>
                            {place.category && <PlacePhone>카테고리: {place.category}</PlacePhone>}
                            <PlacePhone>설명: {place.description || "(없음)"}</PlacePhone>
                        </ResultItem>
                    ))}
                </ResultList>
            )}

            <Label>선택된 가게 정보</Label>
            <Input {...register("storeName")} placeholder="가게명" readOnly/>
            <Input {...register("category")} placeholder="카테고리" readOnly/>
            <Input {...register("location")} placeholder="주소" readOnly/>
            <Input {...register("description")} placeholder="설명" readOnly/>

            <SubmitButton type="submit">등록하기</SubmitButton>
        </Container>
    );
}

export default StoreRegisterPage;


const Container = styled.div`
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
    justify-content: flex-start;
    align-items: center;
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin: 0 auto;
`;

const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2rem;
`;
const Label = styled.label`
  font-weight: 600;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const SearchBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SearchButton = styled.button`
    background-color: #49c48f;
    color: white;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: #3ca377;
    }
`;

const ResultList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 8px;

    /* ✅ 추가된 부분 */
    max-height: 250px;
    overflow-y: auto;
`;

const ResultItem = styled.li`
    padding: 0.8rem;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    background-color: #fff;

    &:hover {
        background-color: #f3f3f3;
    }

    strong {
        display: block;
        font-size: 1rem;
    }

    p {
        margin: 0.25rem 0;
        font-size: 0.9rem;
        color: #555;
    }

    span {
        font-size: 0.8rem;
        color: #888;
    }
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
const PlaceName = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const PlaceAddress = styled.div`
  font-size: 0.9rem;
  color: #444;
`;

const PlacePhone = styled.div`
  font-size: 0.85rem;
  color: #888;
`;
