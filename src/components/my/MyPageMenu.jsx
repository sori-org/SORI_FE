import styled from "styled-components";
import RightArrow from "../../assets/arrow_right.svg";
import {useNavigate} from "react-router-dom";


function MyPageMenu() {
    const nav = useNavigate();

    const menuItems = [
        { label: "내 정보", onClick: () => nav("/mypage/profile") },
        { label: "가게 관리하기", onClick: () => console.log("가게 관리") },
        { label: "로그아웃", onClick: () => console.log("로그아웃") },
    ];
    return (
        <MenuContainer>
            {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={item.onClick}>
                    <Label>{item.label}</Label>
                    <img src={RightArrow} />
                </MenuItem>
            ))}
        </MenuContainer>
    );
}

export default MyPageMenu;

const MenuContainer = styled.div`
  display: flex;
    width: 100%;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

const MenuItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;

  &:hover {
    opacity: 0.8;
  }
`;

const Label = styled.span`
  color: #000;
`;

