import React, { useEffect } from "react"
import { Timeline, Button } from "flowbite-react"
import { CalendarToday, ArrowRight } from "@mui/icons-material"
import AvatarGroup from "../../components/avatargroup"
import avatarData from "./avatardata.js"
import { formatDate } from "../../helper/dateConverter"
import { useOutletContext } from "react-router-dom"
import { useDispatch } from "react-redux"
import { toggleDrawer } from "../../reducers/achivementDrawerReducres"
import AchiversDrawers from "../../components/achivers/achiversDrawers"

function AchiversMaker() {
  const dispatch = useDispatch()
  const setShowProgress = useOutletContext()
  useEffect(() => {
    return () => {
      setShowProgress(true)
    }
  })
  return avatarData.map((item, index) => (
    <div onLoad={() => setShowProgress(false)} key={`${index}`}>
      {item.data.map((info, ind) => (
        <Timeline.Item key={`${ind}-${index}`}>
          <Timeline.Point icon={CalendarToday} />
          <Timeline.Content>
            <Timeline.Time>{formatDate(info.resultDate)}</Timeline.Time>
            <Timeline.Title>
              Results of class {info.classGroup} Batch {info.year}
            </Timeline.Title>
            <Timeline.Body>
              <AvatarGroup avatarData={info} />
              {info.batchDiscription}
              <Button color="gray" onClick={() => dispatch(toggleDrawer())}>
                View More
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </div>
  ))
}

export default function Achivers() {
  return (
    <div className="flex justify-center">
      <Timeline>
        <AchiversMaker />
      </Timeline>
      <AchiversDrawers />
    </div>
  )
}
