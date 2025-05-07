import styled from "styled-components";
import LabeledInput from "../../common/label/LabeledInput.jsx";
import {useState} from "react";
import LabeledTextarea from "../../common/label/LabeledTextarea.jsx";

function StoreSection() {
    const [storeName, setStoreName] = useState("");
    const [storePhoneNumber, setStorePhoneNumber] = useState("");
    const [storeDescription, setStoreDescription] = useState("");
    const [focusedField, setFocusedField] = useState("");

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
