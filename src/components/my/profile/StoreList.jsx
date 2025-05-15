import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StepItem from "./StoreItem.jsx";
import AddImage from "../../../assets/img_add.svg";
import { useStoreList } from "../../../hooks/query/useStoreList.js";
import StoreCardSkeleton from "../../common/skeleton/StoreCardSkeleton.jsx";

function StoreList() {
    const nav = useNavigate();
    const { data: storeListFromAPI, isLoading, isError } = useStoreList();

    const handleAddClick = () => {
        nav("/register?source=mypage");
    };

    // 대표 점포가 맨 위로 오도록 정렬
    const sortedStores = useMemo(() => {
        const stores = storeListFromAPI?.stores || [];
        return [...stores].sort((a, b) => {
            if (a.store_id === stores.main_store_id) return -1;
            if (b.store_id === stores.main_store_id) return 1;
            // store_id를 기준으로 추가 정렬 (일관된 순서 보장)
            if (a.store_id < b.store_id) return -1;
            if (a.store_id > b.store_id) return 1;
            return 0;
        });
    }, [storeListFromAPI]);

    if (isLoading) {
        return (
            <Container>
                {Array.from({ length: 5}).map((_, i) => (
                    <StoreCardSkeleton key={i} />
                ))}
            </Container>
        );
    }

    if (isError) {
        return (
            <Container>
                {Array.from({ length: 5}).map((_, i) => (
                    <StoreCardSkeleton key={i} />
                ))}
            </Container>
        )
    }

    return (
        <Container>
            <Title>
                <Spacer />
                <TitleText>소유 점포 목록</TitleText>
                <img src={AddImage} alt="점포 추가" onClick={handleAddClick}/>
            </Title>
            <ListContainer>
                {sortedStores.length > 0 ? (
                    sortedStores.map((item) => (
                        <StepItem
                            key={item.store_id}
                            item={item}
                            isMain={item.store_id === storeListFromAPI.main_store_id}
                        />
                    ))
                ) : (
                    <p>등록된 점포가 없습니다. 점포를 추가해주세요.</p>
                )}
            </ListContainer>
        </Container>
    );
}

export default StoreList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    padding: 2rem 2rem;
    gap: 2rem;
`;

const Title = styled.div`
    font-size: 1.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    position: relative;
    width: 100%;
    border-bottom: 1px solid lightgray;
    padding: 0.5rem 0;
`;

const TitleText = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.1rem;
    font-weight: 600;
`;

const ListContainer = styled.div`
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

const Spacer = styled.div`
    width: 24px; 
    height: 24px; 
    background-color: transparent;
`;