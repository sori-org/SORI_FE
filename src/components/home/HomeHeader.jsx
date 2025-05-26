import styled, { keyframes } from "styled-components"

const HomeHeader = ({ userData, isLoading }) => {
    return (
        <HomeTitle>
            <HeaderContainer>
                {isLoading ? <SkeletonBoldText /> : <BoldText>{userData?.display_name || "게스트"}님,</BoldText>}
                <HeaderText>
                    <HighlightText>소리</HighlightText>
                    <NormalText>와 함께</NormalText>
                </HeaderText>
                <NormalText>
                    마케팅 컨텐츠를
                    <br />
                    생성해보세요!
                </NormalText>
            </HeaderContainer>
        </HomeTitle>
    )
}

export default HomeHeader

// 스켈레톤 로딩 애니메이션
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

const HomeTitle = styled.div`
  display: flex;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1.5;
`

const HeaderText = styled.div`
  display: flex;
  flex-direction: row;
`

const BoldText = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: black;
  transition: opacity 0.3s ease;
`

const SkeletonBoldText = styled.div`
  width: 120px;
  height: 1.25rem;
  border-radius: 4px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  margin-bottom: 4px;
`

const HighlightText = styled.p`
  font-size: 1.9rem;
  font-weight: 700;
  color: #26957a;
  margin: 0;
`

const NormalText = styled.p`
  font-size: 1.9rem;
  font-weight: 600;
  color: #161b16;
  margin: 0;
`
