import styled from "styled-components";
import Profile from "../../../assets/img_profile.svg"

function UserProfileCard ({ user }) {
  return (
    <Container>
        <img src={Profile}></img>
        <ModifySection>
            <Title>김충영</Title>
            <ModifyButton>프로필 수정</ModifyButton>
        </ModifySection>
    </Container>
  );
}

export default UserProfileCard;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
`;

const ModifySection = styled.div`
    display: flex;
    width: 100%;
    padding: 0 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Title = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
`;

const ModifyButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #49C48F;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    border: none;
    margin-top: 1rem;
`;