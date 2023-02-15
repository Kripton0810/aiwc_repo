import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import { useSelector, useDispatch } from "react-redux"
import { toggleDrawer } from "../../reducers/achivementDrawerReducres"

export default function AchiversDrawers() {
  const state = useSelector(
    (state) => state.achivementDrawerStateReducer.isOpen
  )
  const payload = useSelector(
    (state) => state.achivementDrawerStateReducer.payload
  )
  const dispatch = useDispatch()

  const list = () => (
    <Box
      sx={{ width: "90vw" }}
      role="presentation"
      onClick={() => dispatch(toggleDrawer())}
      onKeyDown={() => dispatch(toggleDrawer())}
    >
      {JSON.stringify(payload)}
    </Box>
  )

  return (
    <div>
      <React.Fragment key="v012">
        {/* <Button onClick={() => dispatch(toggleDrawer())}>OPEN</Button> */}
        <Drawer
          anchor="right"
          open={state}
          onClose={() => dispatch(toggleDrawer())}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
