import styled from "styled-components";
import StoreCard from "../../common/label/StoreCard.jsx";
import { useMyStores } from "../../../hooks/query/useMyStores.js";
import { useMyUser } from "../../../hooks/query/useMyUser.js";
import { useSetMainStore } from "../../../hooks/mutation/useSetMainStore.js";

function ModifyStore() {
    const { data: stores, isPending } = useMyStores();
    const { data: user } = useMyUser();
    const { mutate: setMainStore } = useSetMainStore();

    if (isPending || !stores || !user) return <p>로딩 중...</p>;

    return (
        <Container>
            {stores.map((store, index) => (
                <StoreCard
                    key={store.store_id}
                    label={`소유 점포 ${index + 1}`}
                    value={store.store_name}
                    isMain={store.isMain}
                    onClickSetMain={() => {
                        setMainStore(store.store_id);
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
