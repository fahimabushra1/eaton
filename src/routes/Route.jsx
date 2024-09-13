import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../pages/AddProduct";
// import EditProduct from "../pages/EditProduct";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import LoginRegistrationLayout from "../layouts/LoginRegistrationLayout";
import FoodDetail from "../pages/FoodDetail";
import ManageProduct from "../pages/ManageProduct";

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
            element: <LoginRegistrationLayout/>,
            errorElement: <ErrorPage/>,
            children:[
                 {
                    path: "login",
                    element: <Login/>,
                 },
                 {
                    path: "register",
                    element: <SignUp/>,
                 },
            ]
        },
        {
            path: "",
            element: <DashboardLayout/>,
            errorElement: <ErrorPage/>,
            children:[
                {
                    path: "/dashboard",
                    element: <Dashboard/>,
                    loader:()=> fetch("http://localhost:5000/dashboard/food"),
                 },
                 {
                    path: "/dashboard/food/:id",
                    element: <FoodDetail/>,
                    loader:({params})=>fetch(`http://localhost:5000/dashboard/food/${params.id}`),
                 },
                 {
                    path: "/dashboard/add-product",
                    element:<AddProduct/>,
                    // loader:()=> fetch("http://localhost:5000/dashboard/food"),
                  },
                 {
                    path: "/dashboard/manage-product",
                    element:<ManageProduct/>,
                    loader:()=> fetch("http://localhost:5000/dashboard/food"),
                  },
                //   {
                //     path: "dashboard/edit-product/:id",
                //     element:<EditProduct/>,
                //     loader:({params})=>fetch(`http://localhost:5000/dashboard/food/${params.id}`),
                //   },
            ]
        }
    ]
)