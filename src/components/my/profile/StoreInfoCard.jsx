import styled from "styled-components";
import CrownIcon from "../../../assets/img_crown.svg";
import {useUserStore} from "../../../store/useUserStore.js";

function StoreInfoCard() {
    const user = useUserStore((state) => state.user);

    if (!user || !user.mainStoreId) return null;

    const mainStore = user.storeList.find(store => store.id === user.mainStoreId);
    if (!mainStore) return null;

    return (
        <Container>
            <InfoSection>
                <Title>
                    {mainStore.name}
                    <img src={CrownIcon} alt="대표 가게" />
                </Title>
                <Field>
                    <Label>가게 전화번호:</Label>
                    <Value>{mainStore.phone}</Value>
                </Field>
                <Field>
                    <Label>가게 주소:</Label>
                    <Value>{mainStore.address}</Value>
                </Field>
                <Field>
                    <Label>카테고리:</Label>
                    <Value>{mainStore.category || "(카테고리 없음)"}</Value>
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
    padding: 0 2rem;
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Field = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const Label = styled.span`
    font-size: 0.9rem;
    font-weight: 400;
`;

const Value = styled.span`
    font-weight: 500;
    font-size: 0.9rem;
`;

const Title = styled.p`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1.25rem;
    font-weight: 600;
`;