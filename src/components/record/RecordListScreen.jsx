import styled from "styled-components";
import {useEffect, useMemo, useState} from "react";
import { useHeaderStore } from "../../store/useHeaderStore.js";
import RecordPostList from "./RecordPostList.jsx";
import SortSelector from "./SortSelector.jsx";
import {useRecords} from "../../hooks/query/useRecords.js";
import StoreCardSkeleton from "../common/skeleton/StoreCardSkeleton.jsx";

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

    const sortedPosts = useMemo(() => {
        if (!data) return [];
        return [...data].sort((a, b) => {
            const aTime = new Date(a.created_at).getTime();
            const bTime = new Date(b.created_at).getTime();
            return sortOrder === "desc" ? bTime - aTime : aTime - bTime;
        });
    }, [data, sortOrder]);

    if (isPending || !data) {
        return (
            <SkeletonContainer>
                {Array.from({ length: 5}).map((_, i) => (
                    <StoreCardSkeleton key={i} />
                ))}
            </SkeletonContainer>
        );
    }

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

const SkeletonContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    height: 90vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`;

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
