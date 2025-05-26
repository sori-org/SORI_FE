import { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"

function PostButton({ title, icon, onClick, isSelected, size = "large", multiSelect = false }) {
    const [isPressed, setIsPressed] = useState(false)

    const handleMouseDown = () => {
        setIsPressed(true)
    }

    const handleMouseUp = () => {
        setIsPressed(false)
    }

    const handleClick = (e) => {
        setTimeout(() => {
            if (onClick) onClick(e)
        }, 150)
    }

    useEffect(() => {
        const cleanup = () => {
            setIsPressed(false)
        }

        window.addEventListener("mouseup", cleanup)
        return () => {
            window.removeEventListener("mouseup", cleanup)
        }
    }, [])

    return (
        <PostButtonContainer
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            $isSelected={isSelected}
            $isPressed={isPressed}
            $multiSelect={multiSelect}
            size={size}
            aria-pressed={isSelected}
        >
            <ButtonContent $isPressed={isPressed}>
                <IconWrapper $isSelected={isSelected} $isPressed={isPressed}>
                    {typeof icon === "string" ? (
                        <Image
                            src={icon || "/placeholder.svg"}
                            alt={title}
                            size={size}
                            $isSelected={isSelected}
                            $isPressed={isPressed}
                        />
                    ) : (
                        <IconContainer $isPressed={isPressed}>{icon}</IconContainer>
                    )}
                </IconWrapper>
                <Text size={size} $isSelected={isSelected}>
                    {title}
                </Text>
            </ButtonContent>
            {isSelected && <SelectedIndicator />}
            {multiSelect && isSelected && (
                <CheckmarkBadge>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </CheckmarkBadge>
            )}
            {isPressed && <PressEffect />}
        </PostButtonContainer>
    )
}

export default PostButton

const rippleEffect = keyframes`
    0% {
        transform: scale(0);
        opacity: 0.8;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
`

const PostButtonContainer = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ $isSelected, $isPressed }) => {
        if ($isSelected) {
            return $isPressed ? "#1D6A47" : "#49C48F"
        } else {
            return $isPressed ? "#3DB380" : "#49C48F"
        }
    }};
    border-radius: 20px;
    cursor: pointer;
    width: ${({ size }) => (size === "small" ? "8rem" : "12rem")};
    height: ${({ size }) => (size === "small" ? "6rem" : "5rem")};
    border: none;
    box-shadow: ${({ $isSelected, $isPressed }) => {
        if ($isPressed) {
            return "inset 0 3px 5px rgba(0, 0, 0, 0.2)"
        } else if ($isSelected) {
            return "0 8px 16px rgba(29, 106, 71, 0.3)"
        } else {
            return "0 4px 12px rgba(0, 0, 0, 0.15)"
        }
    }};
    transition: all 0.1s ease;
    padding: 0;
    overflow: hidden;
    transform: ${({ $isPressed }) => ($isPressed ? "translateY(2px) scale(0.98)" : "translateY(0) scale(1)")};

    &:hover {
        background-color: ${({ $isSelected }) => ($isSelected ? "#3DB380" : "#5DCE9F")};
        box-shadow: ${({ $isSelected, $isPressed }) => {
            if ($isPressed) {
                return "inset 0 3px 5px rgba(0, 0, 0, 0.2)"
            } else if ($isSelected) {
                return "0 10px 20px rgba(29, 106, 71, 0.35)"
            } else {
                return "0 6px 16px rgba(0, 0, 0, 0.2)"
            }
        }};
    }

    &:focus {
        outline: 2px solid #1D6A47;
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        width: ${({ size }) => (size === "small" ? "7rem" : "10rem")};
        height: ${({ size }) => (size === "small" ? "5.5rem" : "4.5rem")};
    }
`

const ButtonContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform: ${({ $isPressed }) => ($isPressed ? "scale(0.97)" : "scale(1)")};
    transition: transform 0.1s ease;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ $isSelected, $isPressed }) => {
        if ($isSelected) {
            return $isPressed ? "rgba(255, 255, 255, 0.35)" : "rgba(255, 255, 255, 0.25)"
        } else {
            return $isPressed ? "rgba(255, 255, 255, 0.35)" : "rgba(255, 255, 255, 0.25)"
        }
    }};
    border-radius: 50%;
    width: 48px;
    height: 48px;
    transition: all 0.1s ease;

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

const Image = styled.img`
    width: ${({ size }) => (size === "small" ? "24px" : "28px")};
    height: ${({ size }) => (size === "small" ? "24px" : "28px")};
    transition: transform 0.1s ease;
    filter: brightness(0) invert(1); /* 항상 흰색 아이콘 */
    transform: ${({ $isPressed }) => ($isPressed ? "scale(0.9)" : "scale(1)")};

    ${PostButtonContainer}:hover & {
        transform: ${({ $isPressed }) => ($isPressed ? "scale(0.9)" : "scale(1.1)")};
    }

    @media (max-width: 768px) {
        width: ${({ size }) => (size === "small" ? "20px" : "24px")};
        height: ${({ size }) => (size === "small" ? "20px" : "24px")};
    }
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease;
    transform: ${({ $isPressed }) => ($isPressed ? "scale(0.9)" : "scale(1)")};

    ${PostButtonContainer}:hover & {
        transform: scale(1.1);
    }
`

const Text = styled.p`
    font-size: ${({ size }) => (size === "small" ? "16px" : "18px")};
    font-weight: 600;
    color: #FFFFFF; /* 항상 흰색 텍스트 */
    margin: 0;
    transition: color 0.1s ease;

    @media (max-width: 768px) {
        font-size: ${({ size }) => (size === "small" ? "14px" : "16px")};
    }
`

const SelectedIndicator = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 0 0 20px 20px;
`

const CheckmarkBadge = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #1D6A47;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 2;
`

const PressEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  z-index: 0;
  animation: ${rippleEffect} 0.6s ease-out;
`
