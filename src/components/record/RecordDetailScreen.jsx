import styled from "styled-components";
import { useEffect } from "react";
import { useHeaderStore } from "../../store/useHeaderStore.js";
import { useParams } from "react-router-dom";
import { useRecordDetail } from "../../hooks/query/useRecordDetail.js";
import {formatDate} from "../../utils/formatDate.js";
import RecordImageSection from "./RecordImageSection.jsx";
import RecordTextSection from "./RecordTextSection.jsx";


function RecordDetailScreen() {
    const { id } = useParams();
    const numericId = Number(id);
    const setTitle = useHeaderStore((state) => state.setTitle);
    const { data, isPending, isError, error } = useRecordDetail(numericId);

    useEffect(() => {
        if (data?.created_at) {
            const formattedDate = formatDate(data.created_at);
            setTitle(`${formattedDate} 게시물`);
        }
    }, [data, setTitle]);


    if (isPending) return <Container>로딩 중...</Container>;
    if (isError) return <Container>에러: {error.message}</Container>;
    if (!data) return <Container>데이터 없음</Container>;

    return (
        <Container>
            <RecordImageSection imageUrl={data.result_image} />
            <RecordTextSection text={data.text} hashtags={data.hashtag} />
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
    padding: 0 2rem;
    overflow-y: auto;
`;
