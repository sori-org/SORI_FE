import styled from "styled-components";
import ProgressBar from "./ProgressBar.jsx";

function MultiStepFormHeader() {
    return (
        <HeaderContainer>
            <ProgressBar />
        </HeaderContainer>
    );
}

export default MultiStepFormHeader;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
`;
