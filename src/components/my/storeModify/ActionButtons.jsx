import {memo} from "react";
import styled from "styled-components";

const ActionButtons =({ onCancel, onSubmit, isLoading }) => {
    return (
        <ButtonSection>
            <CancelButton onClick={onCancel}>취소</CancelButton>
            <ModifyButton onClick={onSubmit} disabled={isLoading}>
                {isLoading ? "수정 중..." : "수정 완료"}
            </ModifyButton>
        </ButtonSection>
    )
}

export default memo(ActionButtons);

const ButtonSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

const CancelButton = styled.button`
  width: 45%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 16px;
  background-color: white;
  color: #767676;
  border: 1px solid lightgray;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 45%;
  }
`

const ModifyButton = styled.button`
  width: 45%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 16px;
  background-color: #49c48f;
  color: white;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #a8e0ca;
    cursor: not-allowed;
  }
  @media (max-width: 480px) {
    width: 45%;
  }
`
