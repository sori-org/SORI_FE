import styled from "styled-components";
import { useEffect, useState } from "react";
import { useHeaderStore } from "../../store/useHeaderStore.js";
import RecordPostList from "./RecordPostList.jsx";
import SortSelector from "./SortSelector.jsx";

function RecordListScreen() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const [sortOrder, setSortOrder] = useState("desc");

    useEffect(() => {
        setTitle("생성 기록 보기");
    }, []);

    const handleToggleSort = () => {
        setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    };

    return (
        <Container>
            <SortWrapper>
                <SortSelector sortOrder={sortOrder} onChangeSort={handleToggleSort} />
            </SortWrapper>
            <RecordPostList sortOrder={sortOrder} />
        </Container>
    );
}

export default RecordListScreen;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const SortWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 1.5rem;
`;
