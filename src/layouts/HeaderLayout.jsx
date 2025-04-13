import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import {useHeaderStore} from "../store/useHeaderStore.js";
import Header from "../components/common/header/Header.jsx";

export default function HeaderLayout() {
    const title = useHeaderStore((state) => state.title);

    return (
        <Wrapper>
            <Header title={title} />
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
    padding-top: calc(env(safe-area-inset-top));
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    background-color: white;
`;

const Content = styled.div`
    padding-top: 10vh;
`;
