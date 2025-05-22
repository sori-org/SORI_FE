import styled, {keyframes} from "styled-components";

const SkeletonTextarea = () => {
    return (
        <SkeletonContainer>
            <SkeletonLabel />
            <SkeletonTextareaField />
        </SkeletonContainer>
    )
}
export default SkeletonTextarea;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`

const SkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SkeletonLabel = styled(SkeletonBase)`
  width: 30%;
  height: 16px;
  margin-bottom: 4px;
    
`

const SkeletonTextareaField = styled(SkeletonBase)`
  width: 100%;
  height: 120px;
`
