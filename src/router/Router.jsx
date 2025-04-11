import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";

import LoginPage from "../pages/auth/LoginPage.jsx";
import StoreRegisterPage from "../pages/store/StoreRegisterPage.jsx";

import HomePage from "../pages/home/HomePage.jsx";
import PostNewPage from "../pages/postNew/PostNewPage.jsx";
import LoadingPage from "../pages/common/LoadingPage.jsx";
import ResultPage from "../pages/result/ResultPage.jsx";

import MyPage from "../pages/my/MyPage.jsx";
import ProfilePage from "../pages/my/ProfilePage.jsx";
import ModifyPage from "../pages/my/ModifyPage.jsx";

import NotFoundPage from "../pages/common/NotFoundPage.jsx"; // 404 페이지도 만들어두면 좋아!

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            // 기본 진입: 로그인
            { path: "", element: <LoginPage /> },

            // 비회원도 접근 가능한 페이지
            { path: "store-register", element: <StoreRegisterPage /> },

            // 홈 관련
            { path: "home", element: <HomePage /> },
            { path: "post-new", element: <PostNewPage /> },
            { path: "loading", element: <LoadingPage /> },
            { path: "result", element: <ResultPage /> },

            // 마이페이지 중첩 경로
            {
                path: "mypage",
                children: [
                    { path: "", element: <MyPage /> },
                    { path: "profile", element: <ProfilePage /> },
                    { path: "modify", element: <ModifyPage /> },
                ],
            },

            // 404 fallback
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);

export default router;
