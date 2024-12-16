import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import HomePage from "../pages/home/HomePage.jsx";
import PostNewPage from "../pages/postNew/PostNewPage.jsx";
import LoadingPage from "../pages/common/LoadingPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/post-new', element: <PostNewPage />},
            {path: '/loading', element: <LoadingPage />},
        ]
    },
]);

export default router;