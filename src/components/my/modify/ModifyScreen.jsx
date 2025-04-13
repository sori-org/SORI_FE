import styled from "styled-components";
import Header from "../../common/header/Header.jsx";
import ModifyProfile from "./ModifyProfile.jsx";
import ModifyStore from "./ModifyStore.jsx";

function ModifyScreen() {
    return (
        <Container>
            <Header title={"프로필 수정"}/>
            <ModifyProfile />
            <ModifyStore />
        </Container>
    );
}

export default ModifyScreen;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;