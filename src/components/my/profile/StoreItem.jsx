import styled from "styled-components";
import CrownIcon from "../../../assets/img_crown.svg";

function StepItem ({item}) {
    return (
        <Container>
            <ItemSection>
                <Title>{item.name}</Title>
                {item.isMain ? <img src={CrownIcon} alt={"메인"}/> : null}
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
    border: 1px solid #49C48F;
    border-radius: 10px;
`;

const ItemSection = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
`;

const Title = styled.div`
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 0.2rem 0;
`;
