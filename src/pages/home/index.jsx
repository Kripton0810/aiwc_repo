import React from "react"
import NavBar from "../../components/navbar"
import Carosuel from "../../components/carousel"
import NoticeBoard from "../../components/noticeBoard"

function Home() {
  return (
    <>
      <NavBar />
      <div className="flex justify-evenly flex-col items-center gap-2 xl:flex-row xl:items-start">
        <Carosuel />
        <NoticeBoard />
      </div>
    </>
  )
}
export default Home
