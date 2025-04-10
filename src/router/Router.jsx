import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";

import LoginPage from "../pages/auth/LoginPage.jsx";

import HomePage from "../pages/home/HomePage.jsx";
import PostNewPage from "../pages/postNew/PostNewPage.jsx";
import LoadingPage from "../pages/common/LoadingPage.jsx";
import ResultPage from "../pages/result/ResultPage.jsx";

import MyPage from "../pages/my/MyPage.jsx";
import ProfilePage from "../pages/my/ProfilePage.jsx";
import ModifyPage from "../pages/my/ModifyPage.jsx";
import StoreRegisterPage from "../pages/store/StoreRegisterPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <LoginPage /> },
            { path: "store-register", element: <StoreRegisterPage /> },

            { path: "home", element: <HomePage /> },
            { path: "post-new", element: <PostNewPage /> },
            { path: "loading", element: <LoadingPage /> },
            { path: "result", element: <ResultPage /> },

            { path: "mypage", element: <MyPage /> },
            { path: "mypage/profile", element: <ProfilePage /> },
            { path: "mypage/modify", element: <ModifyPage /> },
        ]
    }

]);

export default router;
