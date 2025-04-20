import styled from "styled-components";

function StoreInfoPreview({ register }) {
    return (
        <Container>
            <Label>선택된 가게 정보</Label>
            <Input {...register("store_name")}
                   placeholder="가게명" readOnly />
            <Input {...register("store_category")}
                   placeholder="카테고리" readOnly />
            <Input {...register("store_address")}
                   placeholder="주소" readOnly />
            <Input {...register("store_phone")}
                   placeholder="가게 전화번호를 입력하세요" />
        </Container>
    );
}

export default StoreInfoPreview;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
`;

const Label = styled.label`
  font-weight: 600;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 0.5rem;
`;
