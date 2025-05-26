"use client"

import styled from "styled-components"
import PostImage from "../../assets/post.svg"
import { useState } from "react"

const CreateContentButton = ({ onClick }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    return (
        <ButtonSection>
            <PostButton
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false)
                    setIsPressed(false)
                }}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                $isHovered={isHovered}
                $isPressed={isPressed}
            >
                <Text>컨텐츠 생성하기</Text>
                <ButtonIcon src={PostImage} alt="생성하기" />
            </PostButton>
        </ButtonSection>
    )
}

export default CreateContentButton

const ButtonSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1rem;
`

const PostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isPressed }) => ($isPressed ? "#3DB380" : "#49C48F")};
  padding: 1rem 1.5rem;
  border-radius: 30px;
  border: none;
  gap: 0.5rem;
  cursor: pointer;
  box-shadow: ${({ $isPressed, $isHovered }) => {
    if ($isPressed) {
        return "inset 2px 3px 6px rgba(0, 0, 0, 0.25)"
    } else if ($isHovered) {
        return "4px 6px 8px rgba(0, 0, 0, 0.3), 0px 6px 12px rgba(0, 0, 0, 0.15)"
    } else {
        return "2px 3px 6px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1)"
    }
}};
  transform: ${({ $isPressed }) => ($isPressed ? "scale(0.98)" : "scale(1)")};
  transition: all 0.2s ease;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
  ${PostButton}:hover & {
    transform: translateX(2px);
  }
`
