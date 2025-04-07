import styled from "styled-components";

function StoreInfoCard ({ store }) {
    return (
        <Container>
            <InfoSection>
                <Field>
                    <Label>가게 이름:</Label>
                    <Value>소리네</Value>
                </Field>
                <Field>
                    <Label>대표자 전화번호:</Label>
                    <Value>010-7187-1325</Value>
                </Field>
                <Field>
                    <Label>가게 전화번호:</Label>
                    <Value>02-123-1456</Value>
                </Field>
                <Field>
                    <Label>가게 위치:</Label>
                    <Value>서울 마포구</Value>
                </Field>
                <Field>
                    <Label>사업자번호:</Label>
                    <Value>1234566</Value>
                </Field>
            </InfoSection>
        </Container>
    );
}

export default StoreInfoCard;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 3rem;
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Field = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  color: #333;
`;