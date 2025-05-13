import styled from "styled-components";
import {useState} from "react";
import {searchPlaceByKeyword} from "../../apis/store/serachPlaceByKeyword";

function SearchSection({setValue, setResults, results}) {
    const [keyword, setKeyword] = useState("");

    const onSearch = async () => {
        if (!keyword) return;
        try {
            const res = await searchPlaceByKeyword(keyword);
            setResults(res);
        } catch (e) {
            console.error("검색 실패:", e);
        }
    };

    const handleSelect = (place) => {
        setValue("store_name", place.title);
        setValue("store_category", place.category);
        setValue("store_address", place.address);
        setResults([]);
    };

    return (
        <Container>
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
                            <PlaceName>{place.title}</PlaceName>
                            <PlaceAddress>{place.address}</PlaceAddress>
                            {place.category && <PlacePhone>카테고리: {place.category}</PlacePhone>}
                        </ResultItem>
                    ))}
                </ResultList>
            )}
        </Container>
    );
}

export default SearchSection;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
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
    gap: 1rem;
`;

const SearchButton = styled.button`
    background-color: #49c48f;
    color: white;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: #3ca377;
    }
`;

const ResultList = styled.ul`
    list-style: none;
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 12px;
    overflow-y: auto;
`;

const ResultItem = styled.li`
    padding: 1rem;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    background-color: #fff;
    line-height: 1.2rem;

    &:hover {
        background-color: #f3f3f3;
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

