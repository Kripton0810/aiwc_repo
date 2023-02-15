import React from "react"
import { Avatar } from "flowbite-react"

function AvatarGroupMaker(picsData) {
  return picsData.pics.map((item, index) => (
    <Avatar img={item} rounded={true} stacked={true} key={`${index}`} />
  ))
}
export default function AvatarGroup({ avatarData }) {
  return (
    <React.Fragment>
      <Avatar.Group>
        <AvatarGroupMaker pics={avatarData.toppersImagesUrl} />
      </Avatar.Group>
    </React.Fragment>
  )
}
