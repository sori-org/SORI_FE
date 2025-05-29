import styled from "styled-components";
import CrownIcon from "../../../assets/img_crown.svg";
import PencilIcon from "../../../assets/img_pencil.svg";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore.js";
import { useGetMainStore } from "../../../hooks/query/useGetMainStore.js";
import SkeletonTextarea from "../../common/skeleton/SkeletonTextarea.jsx";
import ErrorState from "../../loading/ErrorState.jsx";

function StoreInfoCard() {
    const navigate = useNavigate();
    const { user } = useUserStore();
    const mainStore = user?.stores?.find(store => store.store_id === user.main_store_id);
    const { data: storeData, isPending, isError } = useGetMainStore(mainStore?.store_id);

    const handleEditClick = () => {
        navigate("/mypage/modify");
    };

    if (isPending) {
        return (
            <Container>
                <SkeletonTextarea/>
            </Container>
        );
    }

    if (isError || !storeData) {
        return <Container><ErrorState /></Container>;
    }

    const storeFields = [
        { label: "가게 전화번호", value: storeData.store_phone },
        { label: "가게 주소", value: storeData.store_address },
        { label: "카테고리", value: storeData.store_category },
        { label: "가게 설명", value: storeData.store_description },
    ];

    return (
        <Container>
            <InfoSection>
                <Title>
                    <TitleLeft>
                        {storeData.store_name || "대표 가게 없음"}
                        <img src={CrownIcon} alt="대표 가게" />
                    </TitleLeft>
                    <img src={PencilIcon} alt="수정" onClick={handleEditClick} />
                </Title>
                {storeFields.map(({ label, value }) => (
                    <Field key={label}>
                        <Label>{label}:</Label>
                        <Value>{value || "정보 없음"}</Value>
                    </Field>
                ))}
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
    gap: 1rem;
`;
const InfoSection = styled.div`
  display: flex;
    width: 100%;
  flex-direction: column;
  gap: 1rem;
    padding-top: 1rem;
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
    flex: 1;           
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.25rem;
    font-weight: 600;
`;
const TitleLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
`;