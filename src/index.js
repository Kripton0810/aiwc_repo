import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/auth/login"
import RegisterPage from "./pages/auth/register"
import Home from "./pages/home"
import SchoolSingularity from "./pages/school_singularity"

const root = ReactDOM.createRoot(document.getElementById("root"))
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/school-features",
        element: <SchoolSingularity />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
])
root.render(<RouterProvider router={route} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
