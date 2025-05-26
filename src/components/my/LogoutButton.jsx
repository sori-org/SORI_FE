import { useState } from "react"
import styled from "styled-components"
import { LogOut } from "lucide-react"

function LogoutButton({ onLogout }) {
    const [showConfirm, setShowConfirm] = useState(false)

    const handleLogoutClick = () => {
        setShowConfirm(true)
    }

    const handleConfirm = () => {
        // 여기에 로그아웃 API 호출 로직이 들어갈 예정
        if (onLogout) onLogout()
        setShowConfirm(false)
    }

    const handleCancel = () => {
        setShowConfirm(false)
    }

    return (
        <>
            <LogoutButtonContainer onClick={handleLogoutClick}>
                <LogOut size={16} />
                <span>로그아웃</span>
            </LogoutButtonContainer>

            {showConfirm && (
                <ConfirmOverlay>
                    <ConfirmDialog>
                        <ConfirmTitle>로그아웃</ConfirmTitle>
                        <ConfirmMessage>정말 로그아웃 하시겠습니까?</ConfirmMessage>
                        <ButtonGroup>
                            <CancelButton onClick={handleCancel}>취소</CancelButton>
                            <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
                        </ButtonGroup>
                    </ConfirmDialog>
                </ConfirmOverlay>
            )}
        </>
    )
}

export default LogoutButton

const LogoutButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: none;
  border-radius: 20px;
  color: #767676;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
    
  &:hover {
    background-color: #ebebeb;
    color: #555;
  }

  &:active {
    transform: scale(0.98);
  }
`

const ConfirmOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ConfirmDialog = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  width: 85%;
  max-width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ConfirmTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #333;
`

const ConfirmMessage = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0 0 1.5rem 0;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`

const Button = styled.button`
  flex: 1;
  padding: 0.75rem 0;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
`

const CancelButton = styled(Button)`
  background-color: #f5f5f5;
  color: #555;

  &:hover {
    background-color: #ebebeb;
  }
`

const ConfirmButton = styled(Button)`
  background-color: #49c48f;
  color: white;

  &:hover {
    background-color: #3db380;
  }
`
