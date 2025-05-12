import styled from "styled-components";
import StoreCard from "../../common/label/StoreCard.jsx";
import { useStoreList } from "../../../hooks/query/useStoreList.js";
import { useMyUser } from "../../../hooks/query/useMyUser.js";
import { useSetMainStore } from "../../../hooks/mutation/useSetMainStore.js";
import StoreCardSkeleton from "../../common/skeleton/StoreCardSkeleton.jsx";
import {data} from "react-router-dom";

function ModifyStore() {
    const { data: stores, isPending } = useStoreList();
    const { data: user } = useMyUser();
    const { mutate: setMainStore } = useSetMainStore();

    if (isPending || !stores || !user) {
        return (
            <Container>
                {Array.from({ length: 5 }).map((_, i) => (
                    <StoreCardSkeleton key={i} />
                ))}
            </Container>
        );
    }

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
    overflow: auto;
`;
