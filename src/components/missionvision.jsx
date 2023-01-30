import React from "react"
import styled from "styled-components"
import MissionVissionImg from "../images/mission_vision.png"
export default function MissionVision() {
  const BackgroundForMissionVision = styled.div`
    background: url("${MissionVissionImg}") no-repeat;
    width: "100%";
    background-size: cover;
  `
  return (
    <BackgroundForMissionVision className="w-[30%] h-[250px] rounded-md p-5 bg-slate-400">
      <div className="">Our Philosophy</div>
      <div>
        {/* <BackgroundForMissionVision>Hello man</BackgroundForMissionVision> */}
      </div>
    </BackgroundForMissionVision>
  )
}
