import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import App from "./App"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/auth/login"
import RegisterPage from "./pages/auth/register"
import Home from "./pages/home"
import SchoolSingularity from "./pages/school_singularity"
import Achivers from "./pages/achivers"
import store from "./data/store"
import { AnimatePresence } from "framer-motion"
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
      {
        path: "/achievements",
        element: <Achivers />,
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
root.render(
  <Provider store={store}>
    <AnimatePresence>
      <RouterProvider router={route} />
    </AnimatePresence>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
