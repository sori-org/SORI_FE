import styled from "styled-components";
import CrownIcon from "../../../assets/img_crown.svg";

function StepItem({ item, isMain }) {
    return (
        <Container $isMain={isMain}>
            <ItemSection>
                <Title>{item.name}</Title>
                {isMain && <img src={CrownIcon} alt="대표 가게" />}
            </ItemSection>
        </Container>
    );
}

export default StepItem;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.4rem 1.3rem;
    border: 1px solid ${({ $isMain }) => ($isMain ? "#49C48F" : "#ccc")};
    background-color: ${({ $isMain }) =>
            $isMain ? "rgba(73, 196, 143, 0.1)" : "#fff"};
    color: ${({ $isMain }) => ($isMain ? "#1A1A1A" : "#000")};
    border-radius: 16px;
    transition: background-color 0.3s ease;
`;


const ItemSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;
