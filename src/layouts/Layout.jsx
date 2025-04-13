import { Outlet } from 'react-router-dom';
import styled from "styled-components";

export default function Layout() {

    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 480px;
    //min-height: calc(var(--vh, 1vh) * 100);
    padding-top: calc(env(safe-area-inset-top));
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  background-color: white;
`;

