import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home";
import Products from "../Products/Products";
import ExtraProduct from "../ExtraProduct/ExtraProduct";
import Dashboard from "../Dashboard/Dashboard";
import Dashboards from "../Dashboards/Dashboards";
import Profile from "../Profile/Profile";
import EditProfile from "../Profile/EditProfile";

const myRouterBrowser =createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/products",
                element:<Products></Products>,
                loader:()=> fetch("https://dummyjson.com/products")
            },
            {
                path:"/products/:id",
                element:<ExtraProduct></ExtraProduct>,
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path:"/dashboard",
                element: <Dashboard></Dashboard>,
                children:[
                    {
                        path:"/dashboard",
                        element:<Dashboards></Dashboards>
                    },
                    {
                      path:"/dashboard/profile",
                      element:<Profile></Profile>
                    },
                    {
                        path:"/dashboard/editprofile",
                        element:<EditProfile></EditProfile>
                    }
                ]
            }
        ]
    }
]);
export default myRouterBrowser;