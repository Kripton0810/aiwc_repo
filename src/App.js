import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/navbar"
import FooterDiv from "./components/footer"

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <FooterDiv />
    </>
  )
}
