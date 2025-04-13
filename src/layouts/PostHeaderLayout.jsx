import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PostHeader from "../components/common/header/PostHeader.jsx";

export default function PostHeaderLayout() {

    return (
        <Wrapper>
            <PostHeader />
            <Content>
                <Outlet />
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 480px;
    //height: calc(var(--vh, 1vh) * 100);
    padding-top: calc(env(safe-area-inset-top)); 
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    background-color: white;
`;

const Content = styled.div`
    padding-top: 5vh;
`;
