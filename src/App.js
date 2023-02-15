import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import LinearProgress from "@mui/material/LinearProgress"
import NavBar from "./components/navbar"
import FooterDiv from "./components/footer"

export default function App() {
  const [showProgress, setShowProgress] = useState(true)
  return (
    <>
      <LinearProgress style={{ display: showProgress ? "block" : "none" }} />
      <NavBar />
      <Outlet context={setShowProgress} />
      <FooterDiv />
    </>
  )
}
