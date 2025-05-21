import styled from "styled-components";
import Profile from "../../../assets/img_profile.svg"
import LabeledInput from "../../common/label/LabeledInput.jsx";
import {useState} from "react";
import {useUserStore} from "../../../store/useUserStore.js";

function ModifyProfile() {
    const [isOwnerFocused, setIsOwnerFocused] = useState(false);
    const {user, setNickname} = useUserStore();

    return (
        <Container>
            <img src={Profile} alt="프로필 사진" />
            <LabeledInput
                label="닉네임"
                value={user.display_name}
                onChange={(e) => setNickname(e.target.value)}
                onFocus={() => setIsOwnerFocused(true)}
                onBlur={() => setIsOwnerFocused(false)}
                onClear={() => setNickname("")}
                isHighlighted={isOwnerFocused}
                placeholder={user.display_name}
            />
            <BottomLine />
        </Container>
    );
}



export default ModifyProfile;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
`;

const BottomLine = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #DBDBDB;
`;