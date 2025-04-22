import styled from "styled-components";
import { useEffect } from "react";
import { useHeaderStore } from "../../store/useHeaderStore.js";
import { useParams } from "react-router-dom";
import { useRecordDetail } from "../../hooks/query/useRecordDetail.js";
import {formatDate} from "../../utils/formatDate.js";


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
            <h1>{data.store_name}</h1>
            <p>작성일: {new Date(data.created_at).toLocaleDateString()}</p>
            <img src={data.result_image} alt="결과 이미지" width="300" />
            <p>{data.text}</p>
            <p>{data.hashtag}</p>
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
    padding: 2rem;
    gap: 1rem;
`;
