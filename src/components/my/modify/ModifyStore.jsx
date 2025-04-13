import styled from "styled-components";
import {useUserStore} from "../../../store/useUserStore.js";
import {useEffect, useState} from "react";
import StoreCard from "../../common/label/StoreCard.jsx";

function ModifyStore() {
    const user = useUserStore((state) => state.user);
    const [storeList, setStoreList] = useState([""]);

    useEffect(() => {
        if(user.storeList) {
            setStoreList(user.storeList);
        }
    }, [user]);

    return (
        <Container>
            {storeList.map((store, index) => (
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
