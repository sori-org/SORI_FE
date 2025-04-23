import styled from "styled-components";
import Profile from "../../../assets/img_profile.svg"
import LabeledInput from "../../common/label/LabeledInput.jsx";
import {useState} from "react";

function ModifyProfile({ ownerName, setOwnerName }) {
    const [isOwnerFocused, setIsOwnerFocused] = useState(false);

    return (
        <Container>
            <img src={Profile} alt="프로필 사진" />
            <LabeledInput
                label="닉네임"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                onFocus={() => setIsOwnerFocused(true)}
                onBlur={() => setIsOwnerFocused(false)}
                onClear={() => setOwnerName("")}
                isHighlighted={isOwnerFocused}
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