import styled from "styled-components";
import Profile from "../../../assets/img_profile.svg"
import LabeledInput from "../../common/label/LabeledInput.jsx";
import {useUserStore} from "../../../store/useUserStore.js";
import {useEffect, useState} from "react";

function ModifyProfile() {
    const user = useUserStore((state) => state.user);

    const [ownerName, setOwnerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [isOwnerFocused, setIsOwnerFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);

    useEffect(() => {
        setOwnerName(user.displayName || "");
        setPhoneNumber(user.phoneNumber || "");
    }, [user]);

    return (
        <Container>
            <img src={Profile} alt="프로필 사진" />
            <LabeledInput
                label="대표자 이름"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                onFocus={() => setIsOwnerFocused(true)}
                onBlur={() => setIsOwnerFocused(false)}
                onClear={() => setOwnerName("")}
                isHighlighted={isOwnerFocused}
            />
            <LabeledInput
                label="대표자 전화번호"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onFocus={() => setIsPhoneFocused(true)}
                onBlur={() => setIsPhoneFocused(false)}
                onClear={() => setPhoneNumber("")}
                isHighlighted={isPhoneFocused}
            />
            <BottomLine />
        </Container>
    );
}


export default ModifyProfile;

const Container = styled.div`
    display: flex;
    height: 100vh;
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