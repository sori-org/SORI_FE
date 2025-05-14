import ModalPortal from "../../../common/modal/ModalPortal.jsx";
import styled from "styled-components";

function DeleteConfirmModal({ storeLabel, storeName, onConfirm, onClose }) {

    return (
        <ModalPortal>
            <Overlay onClick={onClose}>
                <ModalBox>
                    <MessageTop>정말로 삭제하시겠습니까?</MessageTop>
                    <MessageMain>
                        {storeLabel} ‘<strong>{storeName}</strong>’을<br />
                        <DeleteRed>삭제</DeleteRed> 하시겠습니까?
                    </MessageMain>

                    <ButtonGroup>
                        <DeleteButton onClick={onConfirm}>삭제</DeleteButton>
                        <CancelButton onClick={onClose}>취소</CancelButton>
                    </ButtonGroup>
                </ModalBox>
            </Overlay>
        </ModalPortal>
    );
}

export default DeleteConfirmModal;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
`;

const ModalBox = styled.div`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const MessageTop = styled.p`
  font-size: 1rem;
  color: #333;
    font-weight: 600;
  margin-bottom: 1rem;
`;

const MessageMain = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  line-height: 1.5;
  strong {
    font-weight: 700;
  }
`;

const DeleteRed = styled.span`
  color: #E46161;
    font-weight: 700;

`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DeleteButton = styled.button`
  background-color: #E46161;
  color: white;
  font-weight: 600;
  padding: 0.9rem;
  border-radius: 12px;
  border: none;
    font-size: 1.2rem;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background-color: #FFFFFF;
  color: #333;
  font-weight: 600;
  padding: 0.9rem;
  border-radius: 12px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

