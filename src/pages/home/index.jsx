import React, { useEffect } from "react"
import Carosuel from "../../components/carousel"
import NoticeBoard from "../../components/noticeBoard"
import PrincipalMessage from "../../components/principalmessage"
import AboutSchool from "../../components/aboutschool"
import MissionVision from "../../components/missionvision"
import { useOutletContext } from "react-router-dom"
import { motion } from "framer-motion"
function Home() {
  const setShowProgress = useOutletContext()
  useEffect(() => {
    return () => {
      setShowProgress(true)
    }
  })
  return (
    <motion.div
      initial={{ left: "-100%" }}
      animate={{ left: "0%" }}
      exit={{ left: "-100%" }}
      className="relative overflow-hidden"
    >
      <div
        onLoad={() => {
          setShowProgress(false)
        }}
        className="flex justify-evenly flex-col items-center gap-2 xl:flex-row xl:items-start"
      >
        <Carosuel />
        <NoticeBoard />
      </div>
      <div className="flex justify-evenly items-center mt-5 flex-wrap gap-6">
        <AboutSchool />
        <PrincipalMessage />
        <MissionVision />
      </div>
      {/* <div className="space-y-20"></div> */}
    </motion.div>
  )
}
export default Home
