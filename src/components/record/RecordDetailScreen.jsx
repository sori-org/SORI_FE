import styled from "styled-components";
import { useEffect } from "react";
import { useHeaderStore } from "../../store/useHeaderStore.js";
import { useParams } from "react-router-dom";
import { useRecordDetail } from "../../hooks/query/useRecordDetail.js";
import {formatDate} from "../../utils/formatDate.js";
import RecordImageSection from "./RecordImageSection.jsx";
import RecordTextSection from "./RecordTextSection.jsx";
import NoneImage from "../common/NoneImage.jsx";


function RecordDetailScreen() {
    const { id } = useParams();
    const numericId = Number(id);
    const setTitle = useHeaderStore((state) => state.setTitle);
    const { data, isPending, isError, error } = useRecordDetail(numericId);

    console.log(data)
    useEffect(() => {
        if (data?.created_at) {
            const formattedDate = formatDate(data.created_at);
            setTitle(`${formattedDate} 게시물`);
        }
    }, [data, setTitle]);


    if (isPending) return <Container>로딩 중...</Container>;
    if (isError) return <Container>에러: {error.message}</Container>;

    return (
        <Container>
            {data.image_url ? (<RecordImageSection imageUrl={data.result_image} />) : <NoneImage />}
            <RecordTextSection text={data.result_text} hashtags={data.result_hashtag} />
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
