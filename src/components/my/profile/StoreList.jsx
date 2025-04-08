import styled from "styled-components";
import StepItem from "./StoreItem.jsx";

const items = [
    {
        name: "멘야준",
        isMain: true
    },
    {
        name: "소리네",
        isMain: false
    },
    {
        name: "소리네",
        isMain: false
    },
    {
        name: "소리네",
        isMain: false
    },
    {
        name: "소리네",
        isMain: false
    },
    {
        name: "소리네",
        isMain: false
    },

]

function StoreList() {
    return (
        <Container>
            <Title>소유 점포 목록</Title>
            <ListContainer>
                {items.map((item, index) => (
                    <StepItem key={index} item={item} />
                ))}
            </ListContainer>
        </Container>
    );
}

export default StoreList;

// flex-grow: 1;를 사용하여 남는 공간을 차지하도록 설정
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-grow: 1; // 남는 공간을 차지
    overflow: hidden; // 내부 스크롤만 허용
    padding: 1rem 3rem;
    margin-top: 1rem;
    gap: 1rem;
`;

const Title = styled.div`
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 100%;
    border-radius: 2px;
    border-bottom: 2px solid #49C48F;
    border-top: 2px solid #49C48F;
    padding: 0.2rem 0;
`;

const ListContainer = styled.div`
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 0.5rem;
`;