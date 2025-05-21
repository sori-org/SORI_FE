import styled from "styled-components";
import Profile from "../../../assets/img_profile.svg"
import LabeledInput from "../../common/label/LabeledInput.jsx";
import React, {useState} from "react";
import {useUserStore} from "../../../store/useUserStore.js";

function ModifyProfile() {
    const [isOwnerFocused, setIsOwnerFocused] = useState(false);
    const displayName = useUserStore(state => (state.user?.display_name));
    const setNickname = useUserStore(state => (state.setNickname));

    return (
        <Container>
            <img src={Profile} alt="프로필 사진" />
            <LabeledInput
                label="닉네임"
                value={displayName}
                onChange={(e) => setNickname(e.target.value)}
                onFocus={() => setIsOwnerFocused(true)}
                onBlur={() => setIsOwnerFocused(false)}
                onClear={() => setNickname("")}
                isHighlighted={isOwnerFocused}
                placeholder={displayName}
            />
            <BottomLine />
        </Container>
    );
}



export default React.memo(ModifyProfile);

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