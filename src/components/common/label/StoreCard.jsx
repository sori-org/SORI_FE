import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useControlModal} from "../../../hooks/useControlModal.js";
import DeleteConfirmModal from "../../my/storeModify/modal/DeleteConfirmModal.jsx";

function StoreCard({ label, value, isMain, onClickSetMain }) {
    const navigate = useNavigate();
    const { modalState, openModal, closeModal } = useControlModal()

    const handleEdit = () => {
        navigate("/mypage/store-modify");
    };

    return (
        <Wrapper>
            <TopSection>
                <Label>{label}</Label>
                <Actions>
                    <ActionText onClick={handleEdit}>수정</ActionText>
                    <ActionText onClick={openModal}>삭제</ActionText>
                    {modalState && (
                        <DeleteConfirmModal
                            storeLabel={label}
                            storeName={value}
                            onClose={closeModal}
                        />
                    )}
                </Actions>
            </TopSection>
            <CardBox>
                <Name>{value}</Name>
                {isMain ? (
                    <MainBadge>대표 가게</MainBadge>
                ) : (
                    <SetMainButton onClick={onClickSetMain}>대표 설정</SetMainButton>
                )}
            </CardBox>
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
