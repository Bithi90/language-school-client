import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import PrivateRoutes from "./PrivateRoutes";
import Class from "../Pages/Class/Class";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import ManageAllClass from "../Pages/Dashboard/ManageAllClass/ManageAllClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: 'instructor',
          element:<Instructor></Instructor>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<Registration></Registration>
        },
        {
          path:'course',
          element:<Class></Class>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path: "dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'selectedClasses',
          element:<PrivateRoutes><MySelectedClass></MySelectedClass></PrivateRoutes>
        },
        {
          path:'manageUser',
          element:<ManageUser></ManageUser>
        },
        {
          path:'manageClass',
          element:<ManageClass></ManageClass>
        },
        {
          path:'addClass',
          element:<AddClass></AddClass>
        },
        {
          path:'manageAllClass',
          element:<ManageAllClass></ManageAllClass>
        }
      ] 
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);
  