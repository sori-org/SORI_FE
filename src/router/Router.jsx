import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import PostHeaderLayout from "../layouts/PostHeaderLayout.jsx";

import LoginPage from "../pages/auth/LoginPage.jsx";
import StoreRegisterPage from "../pages/store/StoreRegisterPage.jsx";

import HomePage from "../pages/home/HomePage.jsx";
import PostNewPage from "../pages/postNew/PostNewPage.jsx";
import LoadingPage from "../pages/common/LoadingPage.jsx";
import ResultPage from "../pages/result/ResultPage.jsx";

import MyPage from "../pages/my/MyPage.jsx";
import ProfilePage from "../pages/my/ProfilePage.jsx";
import ModifyPage from "../pages/my/ModifyPage.jsx";

import NotFoundPage from "../pages/common/NotFoundPage.jsx";
import HeaderLayout from "../layouts/HeaderLayout.jsx";
import KakaoCallbackPage from "../pages/auth/KakaoCallbackPage.jsx";
import StoreModifyPage from "../pages/my/StoreModifyPage.jsx";
import RecordListPage from "../pages/record/RecordListPage.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: "/", element: <LoginPage /> },
            { path: "store-register", element: <StoreRegisterPage /> },
            { path: "home", element: <HomePage /> },
            { path: "loading", element: <LoadingPage /> },
            { path: "result", element: <ResultPage /> },
            { path: "kakao/callback", element: <KakaoCallbackPage />},
        ],
    },

    {
        path: "mypage",
        element: <HeaderLayout />,
        children: [
            { path: "", element: <MyPage /> },
            { path: "profile", element: <ProfilePage /> },
            { path: "modify", element: <ModifyPage /> },
            { path: "store-modify", element: <StoreModifyPage /> },
        ],
    },

    {
        path: "record",
        element: <HeaderLayout />,
        children: [
            { path: "", element: <RecordListPage /> },
        ],
    },

    {
        path: "post-new",
        element: <PostHeaderLayout />,
        children: [
            { path: "", element: <PostNewPage /> },
        ],
    },

    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export default router;
