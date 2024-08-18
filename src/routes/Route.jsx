import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout/>,
            errorElement: <ErrorPage/>,
            children:[
                {
                    path: "/",
                    element: <Home/>,
                 },
            ]
        },
        {
            path: "",
            element: <DashboardLayout/>,
            errorElement: <ErrorPage/>,
            children:[
                {
                    path: "dashboard",
                    element: <Dashboard/>,
                 },
            ]
        }
    ]
)