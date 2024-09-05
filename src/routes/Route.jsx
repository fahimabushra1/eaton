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
                //  {
                //     path: "/products/:id",
                //     element: <ProductDetails/>,
                //     loader:({params})=>fetch(`http://localhost:5173/coffees/${params.id}`),
                //  },
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
                    path: "dashboard",
                    element: <Dashboard/>,
                 },
                 {
                    path: "dashboard/add-product",
                    element:<AddProduct/>,
                    // loader:()=> fetch("http://localhost:5000/coffees"),
                  },
                //   {
                //     path: "dashboard/edit-product/:id",
                //     element:<EditProduct/>,
                //     loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
                //   },
            ]
        }
    ]
)