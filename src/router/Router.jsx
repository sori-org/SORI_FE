import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import HomePage from "../pages/home/HomePage.jsx";
import PostNewPage from "../pages/postNew/PostNewPage.jsx";
import LoadingPage from "../pages/common/LoadingPage.jsx";
import ResultPage from "../pages/result/ResultPage.jsx";
import MyPage from "../pages/my/MyPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/post-new', element: <PostNewPage />},
            {path: '/loading', element: <LoadingPage />},
            {path: 'result', element: <ResultPage />},
            {path: '/mypage', element: <MyPage />}
        ]
    },
]);

export default router;