import styled from "styled-components";
import MyHeader from "../common/MyHeader.jsx";

function MyMainScreen() {
    return (
        <Container>
            <MyHeader />
        </Container>
    );
}

export default MyMainScreen;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;