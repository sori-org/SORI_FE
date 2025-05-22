import {memo} from "react";
import styled, {keyframes} from "styled-components";

const SkeletonInput = () => {
    return (
        <SkeletonContainer>
            <SkeletonLabel />
            <SkeletonField />
        </SkeletonContainer>
    )
}
export default memo(SkeletonInput);

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

const SkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`

const SkeletonLabel = styled(SkeletonBase)`
  width: 30%;
  height: 16px;
  margin-bottom: 4px;
`

const SkeletonField = styled(SkeletonBase)`
  width: 100%;
  height: 48px;
`