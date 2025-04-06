import styled from "styled-components";
import MyHeader from "../common/MyHeader.jsx";
import MyPageMenu from "./MyPageMenu.jsx";

function MyMainScreen() {
    return (
        <Container>
            <MyHeader title={"My"} />
            <MyPageMenu />
        </Container>
    );
}

export default MyMainScreen;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;