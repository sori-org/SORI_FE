import styled from "styled-components";
import {memo} from "react";

const ErrorState = ({ message }) => (
    <ErrorContainer>
        <ErrorIcon>!</ErrorIcon>
        <ErrorMessage>{message || "가게 정보를 불러오는데 실패했습니다."}</ErrorMessage>
        <ErrorHint>잠시 후 다시 시도해주세요.</ErrorHint>
    </ErrorContainer>
)

export default memo(ErrorState);

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  gap: 1rem;
  background-color: #fff8f8;
  border-radius: 8px;
  border: 1px solid #ffdddd;
`

const ErrorIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ff6b6b;
  color: white;
  font-size: 24px;
  font-weight: bold;
`

const ErrorMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin: 0;
`

const ErrorHint = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin: 0;
`
