import styled from "styled-components";
import Header from "../../common/header/Header.jsx";
import ModifyProfile from "./ModifyProfile.jsx";
import ModifyStore from "./ModifyStore.jsx";
import {useUpdateNickname} from "../../../hooks/mutation/useUpdateNickname.js";
import {useUserStore} from "../../../store/useUserStore.js";
import {useNavigate} from "react-router-dom";
import { commonButtonStyles } from "../../../style/ButtonStyles";

function ModifyScreen() {
    const { mutate, isLoading } = useUpdateNickname();
    const navigate = useNavigate();

    const handleNicknameUpdate = () => {
        const currentUserNickname = useUserStore.getState().user?.display_name;

        mutate(currentUserNickname, {
            onSuccess: () => {
                alert("프로필이 수정되었습니다!");
                navigate("/mypage");
            },
            onError: () => {
                alert("닉네임 수정 실패");
            },
        });
    };

    const handleModifyAll = () => {
        if (isLoading) return;
        handleNicknameUpdate();
    };

    return (
        <Container>
            <Header title={"프로필 수정"} />
            <ModifyProfile />
            <ModifyStore />
            <ButtonSection>
                <CancelButton
                    onClick={() => navigate(-1)}
                    disabled={isLoading}
                >
                    취소
                </CancelButton>
                <ModifyButton
                    onClick={handleModifyAll}
                    disabled={isLoading}
                >
                    {isLoading ? '수정 중...' : '수정 완료'}
                </ModifyButton>
            </ButtonSection>
        </Container>
    );
}

export default ModifyScreen;

const Container = styled.div`
    display: flex;
    height: 90vh;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: auto;
`;

const ButtonSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: sticky; 
    bottom: 0;
    background: linear-gradient(to top, rgba(255,255,255,1) 70%, rgba(255,255,255,0)); 
`;

const CancelButton = styled.button`
    ${commonButtonStyles};
    width: 45%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 16px;
    background-color: white;
    color: #767676;
    border: 1px solid lightgray;
    &:active {
        background-color: #f0f0f0;
    }
    @media (max-width: 480px) {
        width: 45%;
    }
`;

const ModifyButton = styled.button`
    ${commonButtonStyles};
    width: 45%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 16px;
    background-color: #49c48f;
    color: white;
    &:active {
        background-color: #3aa07b;
    }
    @media (max-width: 480px) {
        width: 45%;
    }
`;