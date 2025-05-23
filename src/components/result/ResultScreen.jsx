import styled from "styled-components";
import { useEffect } from "react";
import { useHeaderStore } from "../../store/useHeaderStore.js";
import { useParams } from "react-router-dom";
import { useResultDetail } from "../../hooks/query/useResultDetail.js";
import {formatDate} from "../../utils/formatDate.js";
import RecordImageSection from "../../components/record/RecordImageSection.jsx"
import RecordTextSection from "../../components/record/RecordTextSection.jsx"
import NoneImage from "../common/NoneImage.jsx";
import SkeletonRecordDetail from "../common/skeleton/SkeletonRecordDetail.jsx";
import ErrorState from "../loading/ErrorState.jsx";

function ResultScreen() {
    const { id } = useParams();
    const numericId = Number(id);
    const setTitle = useHeaderStore((state) => state.setTitle);
    const { data, isPending, isError } = useResultDetail(numericId);

    console.log(data)

    useEffect(() => {
        if (data?.created_at) {
            const formattedDate = formatDate(data.created_at);
            setTitle(`${formattedDate} 게시물`);
        }
    }, [data, setTitle]);


    const getImageUrl = (path) => {
        if(!path) return"/placeholder.png";
        if(path.startsWith("http")) return path;
        return import.meta.env.VITE_BACKEND_URL + "/" + path;
    }

    const imageUrl = getImageUrl(data?.image_url);

    const handleCopyLink = async () => {
        const baseUrl = window.location.origin
        const currentUrl = `${baseUrl}${location.pathname}`

        try {
            await navigator.clipboard.writeText(currentUrl)
            alert("링크가 클립보드에 복사되었습니다!")
        } catch (err) {
            console.error("링크 복사에 실패했습니다.", err)
            alert("링크 복사에 실패했습니다. 다시 시도해주세요.")
        }
    }



    if (isPending) {
        return (
            <Container>
                <SkeletonRecordDetail />
            </Container>
        );
    }

    if (isError) {
        return (
            <Container>
                <ErrorState />
            </Container>
        )
    }

    return (
        <Container>
            {data.image_url ? (
                <RecordImageSection imageUrl={imageUrl} />
            ) : (
                <NoneImage />
            )}
            <RecordTextSection text={data.result_text} hashtags={data.result_hashtag} />
            <ShareButtonContainer>
                <ShareButton onClick={handleCopyLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12548 15.0077 5.24917 15.0227 5.37061L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 18.6294C15.0077 18.7508 15 18.8745 15 19C15 20.6569 16.3431 22 18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C17.1911 16 16.457 16.3202 15.9174 16.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 7.15934C16.457 7.67985 17.1911 8 18 8Z"
                            fill="#4CAF50"
                        />
                    </svg>
                </ShareButton>
            </ShareButtonContainer>
        </Container>
    );
}

export default ResultScreen;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    align-items: center;
    padding: 0 2rem;
    overflow-y: auto;
`;

const ShareButtonContainer = styled.div`
    position: sticky;
    bottom: 3%;
    left: 100%;
`

const ShareButton = styled.button`
    width: 48px;
    height: 48px;

    border-radius: 50%;
    background-color: white;
    border: 1px solid #E0E0E0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #F5F5F5;
    }
`