import styled from "styled-components";
import Header from "../../common/header/Header.jsx";
import ModifyProfile from "./ModifyProfile.jsx";
import ModifyStore from "./ModifyStore.jsx";
import {useUpdateNickname} from "../../../hooks/mutation/useUpdateNickname.js";
import {useUserStore} from "../../../store/useUserStore.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function ModifyScreen() {
    const {displayName, mainStoreId, setDisplayName, setMainStoreId} = useUserStore()
    const nav = useNavigate();
    const { mutate } = useUpdateNickname();

    const [ownerName, setOwnerName] = useState(displayName || "");

    const handleNicknameUpdate = () => {
        if (!ownerName.trim()) return;

        mutate(ownerName, {
            onSuccess: () => {
                setDisplayName(ownerName);
                alert("닉네임이 수정되었습니다!");
            },
            onError: () => {
                alert("닉네임 수정 실패");
            },
        });
    };

    const handleModifyAll = () => {
        handleNicknameUpdate();
        // 가게 관련 수정 로직도 추가 예정
        nav(-1);
    };

    return (
        <Container>
            <Header title={"프로필 수정"} />
            <ModifyProfile ownerName={ownerName} setOwnerName={setOwnerName} />
            <ModifyStore />
            <ButtonSection>
                <CancelButton>취소</CancelButton>
                <ModifyButton onClick={handleModifyAll}>수정 완료</ModifyButton>
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
