import styled from "styled-components";
import StepItem from "./StoreItem.jsx";
import AddImage from "../../../assets/img_add.svg";

function StoreList({ storeList, mainStoreId }) {
    if (!storeList) return null;

    // 대표 점포가 맨 위로 오도록 정렬
    const sortedStores = [...storeList].sort((a, b) => {
        if (a.id === mainStoreId) return -1;
        if (b.id === mainStoreId) return 1;
        return 0;
    });

    return (
        <Container>
            <Title>
                <Spacer />
                <TitleText>소유 점포 목록</TitleText>
                <img src={AddImage} alt="점포 추가" />
            </Title>
            <ListContainer>
                {sortedStores.map((item) => (
                    <StepItem
                        key={item.id}
                        item={item}
                        isMain={item.id === mainStoreId}
                    />
                ))}
            </ListContainer>
        </Container>
    );
}


export default StoreList;

// 스타일은 그대로 유지
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
`;

const Spacer = styled.div`
    width: 10px;
    height: 10px;
    background-color: transparent;
`;
