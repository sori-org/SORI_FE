import styled from "styled-components";
import MyHeader from "../../common/header/MyHeader.jsx";
import StoreRegister from "../../common/StoreRegister.jsx";
import ModifyProfile from "./ModifyProfile.jsx";

function ModifyScreen() {
    return (
        <Container>
            <MyHeader title={"프로필 수정"}/>
            <ModifyProfile />
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