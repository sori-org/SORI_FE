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

const router = createBrowserRouter([

    // 로그인, 회원가입, 가게 등록은 Layout 없이 별도
    {
        path: "/",
        element: <Layout />, // 모든 페이지를 Layout으로 감쌈
        children: [
            { path: "", element: <LoginPage /> },
            // { path: "signup", element: <SignupPage /> },
            // { path: "store-register", element: <StoreRegisterPage /> },

            { path: "home", element: <HomePage /> },
            { path: "home/post-new", element: <PostNewPage /> },
            { path: "home/loading", element: <LoadingPage /> },
            { path: "home/result", element: <ResultPage /> },

            { path: "mypage", element: <MyPage /> },
            { path: "mypage/profile", element: <ProfilePage /> },
            { path: "mypage/modify", element: <ModifyPage /> },
        ]
    }

]);

export default router;
