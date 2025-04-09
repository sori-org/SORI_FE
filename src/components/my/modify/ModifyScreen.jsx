import styled from "styled-components";
import MyHeader from "../../common/MyHeader.jsx";
import StoreRegister from "../../common/StoreRegister.jsx";

function ModifyScreen() {
    return (
        <Container>
            <MyHeader title={"프로필 수정"}/>
            <StoreRegister />
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