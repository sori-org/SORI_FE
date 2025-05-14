import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useControlModal} from "../../../hooks/useControlModal.js";
import DeleteConfirmModal from "../../my/storeModify/modal/DeleteConfirmModal.jsx";
import {useDeleteStore} from "../../../hooks/mutation/useDeleteStore.js";

function StoreCard({ label, value, isMain, onClickSetMain, storeId }) {
    const navigate = useNavigate();
    const { modalState, openModal, closeModal } = useControlModal()
    const { mutate: deleteStoreMutation, isPending } = useDeleteStore();

    const handleEdit = () => {
        navigate(`/mypage/store-modify/${storeId}`);
    };

    const handleDeleteConfirm = () => {
        if(!storeId) {
            alert("가게 ID가 없습니다.");
            closeModal()
        }

        deleteStoreMutation(storeId, {
            onSuccess: () => {
                closeModal()
                alert(`${label} 가게가 성공적으로 삭제되었습니다.`);
            },
            onError: (error) => {
                closeModal();
                alert(`가게 삭제 실패: ${error.message || '알 수 없는 오류'}`);
            },
        })
    }

    return (
        <Wrapper>
            <TopSection>
                <Label>{label}</Label>
                <Actions>
                    <ActionText onClick={handleEdit}>수정</ActionText>
                    <ActionText onClick={openModal}>삭제</ActionText>
                    {isPending && <span> 삭제 중...</span>}
                </Actions>
            </TopSection>
            <CardBox>
                <Name>{value}</Name>
                {isMain ? (
                    <MainBadge>대표 가게</MainBadge>
                ) : (
                    <SetMainButton onClick={() => onClickSetMain(storeId)}>대표 설정</SetMainButton>
                )}
            </CardBox>
            {modalState && (
                <DeleteConfirmModal
                    storeLabel={label}
                    storeName={value}
                    onClose={closeModal}
                    onConfirm={handleDeleteConfirm}
                />
            )}
        </Wrapper>
    );
}

export default StoreCard;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
`;

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
`;

const Label = styled.span`
    font-size: 0.9rem;
    font-weight: 600;
    color: #0f1f1f;
`;

const Actions = styled.div`
    display: flex;
    gap: 0.8rem;
`;

const ActionText = styled.span`
    font-size: 0.8rem;
    font-weight: 500;
    color: #767676;
    cursor: pointer;
`;

const CardBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 1rem;
`;

const Name = styled.div`
    font-size: 0.9rem;
    font-weight: 500;
`;

const MainBadge = styled.div`
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    color: black;
    font-weight: 400;
    border: 1px solid #49C48F;
    border-radius: 20px;
    background-color: transparent;
`;

const SetMainButton = styled.button`
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
    background-color: #49C48F;
    border-radius: 20px;
    cursor: pointer;
`;
