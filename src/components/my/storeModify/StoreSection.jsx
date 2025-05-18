import styled from "styled-components";
import LabeledInput from "../../common/label/LabeledInput.jsx";
import {useEffect, useState} from "react";
import LabeledTextarea from "../../common/label/LabeledTextarea.jsx";
import {useParams} from "react-router-dom";
import {useGetMainStore} from "../../../hooks/query/useGetMainStore.js";
import {useStoreModifyFormStore} from "../../../store/useStoreModifyFormStore.js";

function StoreSection() {
    const { storeId } = useParams();
    const { data: storeData, isLoading, isError} = useGetMainStore(storeId);
    const { storeName, storePhoneNumber, storeDescription, setStoreName, setStorePhoneNumber, setStoreDescription, setInitialData } = useStoreModifyFormStore();
    const [focusedField, setFocusedField] = useState("");

    useEffect(() => {
        if (storeData) {
            setInitialData(storeData);
        }
    }, [storeData, setInitialData]);

    if (isLoading) {
        return <Container><p>가게 정보를 불러오는 중...</p></Container>;
    }

    if (isError) {
        return <Container><p>가게 정보를 불러오는데 실패했습니다.</p></Container>;
    }

    if (!storeData) {
        return <Container><p>가게 정보를 찾을 수 없습니다.</p></Container>;
    }

    console.log(storeData)

    return (
        <Container>
            <LabeledInput
                label="가게명"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
                onClear={() => setStoreName("")}
                isHighlighted={focusedField === "name"}
            />

            <LabeledInput
                label="가게 전화번호"
                value={storePhoneNumber}
                onChange={(e) => setStorePhoneNumber(e.target.value)}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField("")}
                onClear={() => setStorePhoneNumber("")}
                isHighlighted={focusedField === "phone"}
            />
            <LabeledTextarea
                label="가게 설명"
                value={storeDescription}
                onChange={(e) => setStoreDescription(e.target.value)}
                onFocus={() => setFocusedField("description")}
                onBlur={() => setFocusedField("")}
            />
        </Container>
    );
}


export default StoreSection;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
`;
