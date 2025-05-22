import styled from "styled-components";
import {useEffect, useMemo, useState} from "react";
import { useHeaderStore } from "../../store/useHeaderStore.js";
import RecordPostList from "./RecordPostList.jsx";
import SortSelector from "./SortSelector.jsx";
import {useResults} from "../../hooks/query/useResults.js";
import StoreCardSkeleton from "../common/skeleton/StoreCardSkeleton.jsx";
import { formatAndSortPosts } from "../../utils/formatAndSortPosts";

function RecordListScreen() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const [sortOrder, setSortOrder] = useState("desc");

    const { data, isPending, isError, error } = useResults();
    const numberedPosts = useMemo(() => formatAndSortPosts(data, sortOrder), [data, sortOrder]);

    console.log(data)
    useEffect(() => {
        setTitle("생성 기록 보기");
    }, []);

    const handleToggleSort = () => {
        setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    };


    if (isPending) {
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
            <RecordPostList posts={numberedPosts} />
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
