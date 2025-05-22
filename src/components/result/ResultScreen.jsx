import styled from "styled-components"
import { useLocation, useParams } from "react-router-dom"
import { useResultDetail } from "../../hooks/query/useResultDetail.js"
import { Download, Copy } from "lucide-react"

function ResultScreen() {
    const { contentId } = useParams()
    const location = useLocation()
    const { data, isPending, isError, error } = useResultDetail(contentId)

    if (isPending) return <Container>로딩 중...</Container>
    if (isError) return <Container>에러: {error?.message}</Container>

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

    const handleDownloadImage = async () => {
        try {
            const response = await fetch(data.result_image)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `image-${contentId}.jpg`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
        } catch (err) {
            console.error("이미지 다운로드에 실패했습니다.", err)
            alert("이미지 다운로드에 실패했습니다. 다시 시도해주세요.")
        }
    }

    const handleCopyText = async () => {
        try {
            await navigator.clipboard.writeText(`${data.result_text} ${data.result_hashtag}`)
            alert("텍스트가 클립보드에 복사되었습니다!")
        } catch (err) {
            console.error("텍스트 복사에 실패했습니다.", err)
            alert("텍스트 복사에 실패했습니다. 다시 시도해주세요.")
        }
    }

    return (
        <Container>
            <StepContainer>
                <SectionHeader>
                    <Title>이미지</Title>
                    <DownloadButton onClick={handleDownloadImage}>
                        <Download size={20} />
                    </DownloadButton>
                </SectionHeader>
                <ImageSection src={data.result_image || "/placeholder.svg"} alt="결과 이미지" />

                <SectionHeader>
                    <Title>홍보 문구 및 해시태그</Title>
                    <CopyButton onClick={handleCopyText}>
                        <Copy size={20} />
                    </CopyButton>
                </SectionHeader>
                <TextSection>
                    {data.result_text}
                    <HashTag>{data.result_hashtag}</HashTag>
                </TextSection>
            </StepContainer>

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
    )
}

export default ResultScreen

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: relative;
    background-color: white;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
`

const StepContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    justify-content: center;
    align-items: center;
    gap: 1rem
`

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Title = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    color: #333;
`

const DownloadButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
`

const CopyButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
`

const ImageSection = styled.img`
    width: 70%;
    height: 35vh;
    aspect-ratio: 1 / 1;
    background-color: #f0faf4;
    border-radius: 8px;
    object-fit: contain;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const TextSection = styled.pre`
    width: 100%;
    //min-height: 200px;
    background-color: #f0faf4;
    border-radius: 8px;
    border: none;
    padding: 1.2rem;
    font-size: 0.8rem;
    font-weight: 400;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    white-space: pre-wrap;
    overflow-y: auto;
    font-family: inherit;
`

const ShareButtonContainer = styled.div`
    position: absolute;
    bottom: 24px;
    right: 24px;
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
const HashTag = styled.div`
    color: #007bff;
    font-weight: bold;
    margin-top: 1rem;
`;