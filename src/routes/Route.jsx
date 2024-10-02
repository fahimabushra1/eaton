import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import LoginRegistrationLayout from "../layouts/LoginRegistrationLayout";
import GoogleMap from "../pages/GoogleMap";
import ManageProducts from "../pages/ManageProducts";
import FoodList from "../components/dashboard/FoodList";
import Checkout from "../pages/Checkout";

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
                    path: "/food",
                    element: <Dashboard/>,
                    loader:()=> fetch("http://localhost:5000/food"),
                 },
                 {
                    path: "/food/:id",
                    element: <FoodList/>,
                    loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`), 
                },
                 {
                    path: "/food/checkout",
                    element: <Checkout/>, 
                },
                 {
                    path: "/food/add-product",
                    element:<AddProduct/>,
                    loader:()=> fetch("http://localhost:5000/food"),
                  },
                 {
                    path: "/food/google-map",
                    element:<GoogleMap/>,
                  },
                 {
                    path: "/food/manage-products",
                    element:<ManageProducts/>,
                    loader:()=> fetch("http://localhost:5000/food"),
                  },
                  {
                    path: "/food/manage-products/:id",
                    element:<EditProduct/>,
                    loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`),
                  },
            ]
        },
    ]
)