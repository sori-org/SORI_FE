import styled from "styled-components";
import {useEffect, useMemo, useState} from "react";
import { useHeaderStore } from "../../store/useHeaderStore.js";
import RecordPostList from "./RecordPostList.jsx";
import SortSelector from "./SortSelector.jsx";
import {useRecords} from "../../hooks/query/useRecords.js";

function RecordListScreen() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const [sortOrder, setSortOrder] = useState("desc");

    const { data, isPending, isError, error } = useRecords();


    useEffect(() => {
        setTitle("생성 기록 보기");
    }, []);

    const handleToggleSort = () => {
        setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    };

    // 포스트 정렬
    const sortedPosts = useMemo(() => {
        if (!data) return [];
        return [...data].sort((a, b) => {
            const aTime = new Date(a.created_at).getTime();
            const bTime = new Date(b.created_at).getTime();
            return sortOrder === "desc" ? bTime - aTime : aTime - bTime;
        });
    }, [data, sortOrder]);

    if (isPending) return <div>로딩 중...</div>;
    if (isError) return <div>에러 발생: {error.message}</div>;

    return (
        <Container>
            <SortWrapper>
                <SortSelector sortOrder={sortOrder} onChangeSort={handleToggleSort} />
            </SortWrapper>
            <RecordPostList posts={sortedPosts} />
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
