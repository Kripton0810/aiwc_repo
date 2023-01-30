import React from "react"
import NavBar from "../../components/navbar"
import Carosuel from "../../components/carousel"
import NoticeBoard from "../../components/noticeBoard"
import FooterDiv from "../../components/footer"
import PrincipalMessage from "../../components/principalmessage"
import AboutSchool from "../../components/aboutschool"
import MissionVision from "../../components/missionvision"

function Home() {
  return (
    <>
      <NavBar />
      <div className="flex justify-evenly flex-col items-center gap-2 xl:flex-row xl:items-start">
        <Carosuel />
        <NoticeBoard />
      </div>
      <div className="flex justify-evenly items-center mt-5 flex-wrap">
        <AboutSchool />
        <PrincipalMessage />
        <MissionVision />
      </div>
      {/* <div className="space-y-20"></div> */}
      <FooterDiv />
    </>
  )
}
export default Home
