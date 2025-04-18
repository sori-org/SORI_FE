import styled from "styled-components";
import { useEffect, useState } from "react";
import { useHeaderStore } from "../../store/useHeaderStore.js";
import {useParams} from "react-router-dom";

function RecordDetailScreen() {
    const { id } = useParams();
    const setTitle = useHeaderStore((state) => state.setTitle);

    useEffect(() => {
        setTitle("생성 기록 보기");
    }, []);

    const handleToggleSort = () => {
        setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    };

    return (
        <Container>
        </Container>
    );
}

export default RecordDetailScreen;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

