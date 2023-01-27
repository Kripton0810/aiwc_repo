import React from "react"
import NavBar from "../../components/navbar"
import Carosuel from "../../components/carousel"
import NoticeBoard from "../../components/noticeBoard"

function Home() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <Carosuel />
        <NoticeBoard />
      </div>
    </>
  )
}
export default Home
