import {
    createBrowserRouter,    
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Appartment/Apartment";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Detail from "../Pages/Detail/Detail";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'apartments',
          element: <Apartment></Apartment>,
          loader: ()=> fetch('http://localhost:5000/apartments')
          
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'detail',
          element:<PrivateRoutes><Detail></Detail></PrivateRoutes>
        }
      ]
    },
  ]);