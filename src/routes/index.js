import React from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router';
import AuthLayout from '../layout/AuthLayout';
import MainLayout from '../layout/MainLayout';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import Page404 from '../Pages/Page404';
import Signup from '../Pages/Signup';
export default function Router() {
    return useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Homepage />,
                },
            ]
        },
        {
            path: "",
            element: <AuthLayout />,
            children: [
                {
                    path: "signup",
                    element: <Signup />,
                },
                {
                    path: "login",
                    element: <Login />
                }
            ]
        },
        {
            path: "404", element: <Page404 />
        },
        {
            path: "*",
            element: <Navigate to="/404" replace />
        }
    ])
}