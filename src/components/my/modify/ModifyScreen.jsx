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
            <ButtonSection>
                <CancelButton>취소</CancelButton>
                <ModifyButton>수정 완료</ModifyButton>
            </ButtonSection>
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
    overflow: auto;
`;

const ButtonSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
`;

const CancelButton = styled.button`
    width: 45%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 16px;
    background-color: white;
    color: #767676;
    border: 1px solid lightgray;
    cursor: pointer;
    @media (max-width: 480px) {
        width: 45%;
    }

`;

const ModifyButton = styled.button`
    width: 45%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 16px;
    background-color: #49c48f;
    color: white;
    border: none;
    cursor: pointer;
    @media (max-width: 480px) {
        width: 45%;
    }

`;
