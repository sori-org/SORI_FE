import styled from "styled-components";
import StoreCard from "../../common/label/StoreCard.jsx";
import { useMyStores } from "../../../hooks/query/useMyStores.js";
import { useMyUser } from "../../../hooks/query/useMyUser.js"; // 대표점포 판단용

function ModifyStore() {
    const { data: stores, isPending } = useMyStores();
    const { data: user } = useMyUser();

    if (isPending || !stores || !user) return <p>로딩 중...</p>;

    return (
        <Container>
            {stores.map((store, index) => (
                <StoreCard
                    key={index}
                    label={`소유 점포 ${index + 1}`}
                    value={store.name}
                    isMain={user.mainStoreId === store.id}
                    onClickSetMain={() => {
                        console.log("대표 점포 설정");
                    }}
                />
            ))}
        </Container>
    );
}

export default ModifyStore;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
`;
