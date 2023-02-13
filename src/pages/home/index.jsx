import React from "react"
import Carosuel from "../../components/carousel"
import NoticeBoard from "../../components/noticeBoard"
import PrincipalMessage from "../../components/principalmessage"
import AboutSchool from "../../components/aboutschool"
import MissionVision from "../../components/missionvision"
import Achivers from "../achivers"

function Home() {
  return (
    <>
      <div className="flex justify-evenly flex-col items-center gap-2 xl:flex-row xl:items-start">
        <Carosuel />
        <NoticeBoard />
      </div>
      <div className="flex justify-evenly items-center mt-5 flex-wrap gap-6">
        <AboutSchool />
        <PrincipalMessage />
        <MissionVision />
      </div>
      {/* <div className="space-y-20"></div> */}
    </>
  )
}
export default Home
