import styled from "styled-components";
import StoreCard from "../../common/label/StoreCard.jsx";
import { useStoreList } from "../../../hooks/query/useStoreList.js";
import { useSetMainStore } from "../../../hooks/mutation/useSetMainStore.js";
import SkeletonStoreCard from "../../common/skeleton/SkeletonStoreCard.jsx";
import React from "react";

function ModifyStore() {
    const { data, isPending } = useStoreList();
    const { mutate: setMainStore } = useSetMainStore();
    const storeList = data?.stores || [];

    if (isPending) {
        return (
            <Container>
                {Array.from({ length: 5 }).map((_, i) => (
                    <SkeletonStoreCard key={i} />
                ))}
            </Container>
        );
    }

    return (
        <Container>
            {storeList.map((store, index) => (
                <StoreCard
                    key={store.store_id}
                    label={`소유 점포 ${index + 1}`}
                    value={store.store_name}
                    onClickSetMain={() => {
                        setMainStore(store.store_id);
                    }}
                    storeId={store.store_id}
                    isMain={store.store_id === data.main_store_id}
                />
            ))}
        </Container>
    );
}

export default React.memo( ModifyStore);

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
