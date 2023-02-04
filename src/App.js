import React from 'react'
import LoginPage from "./pages/auth/login"
import RegisterPage from "./pages/auth/register"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import SchoolSingularity from "./pages/school_singularity"
import NavBar from './components/navbar'

export default function App() {
    const route = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path:"/school-features",
          element:  <SchoolSingularity/>
        }
      ])
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}
