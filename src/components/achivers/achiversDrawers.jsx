import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import { useSelector, useDispatch } from "react-redux"
import { toggleDrawer } from "../../reducers/achivementDrawerReducres"
import { formatDate } from "../../helper/dateConverter"
function DrawerItemMaker() {
  const payload = useSelector(
    (state) => state.achivementDrawerStateReducer.payload
  )
  return (
    <>
      <div className="text-2xl flex justify-center underline font-semibold">
        Results of class {payload.classGroup} year {payload.year}
      </div>
      <span className="text-xl flex justify-center">
        Result date {formatDate(payload.resultDate)}
      </span>
      <div className="flex flex-wrap  gap-5 justify-evenly ">
        {payload.topperInfo.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-center h-44">
              <img className="rounded-t-sm " src={item.imageURL} alt="" />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  {item.name}
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default function AchiversDrawers() {
  const state = useSelector(
    (state) => state.achivementDrawerStateReducer.isOpen
  )
  const dispatch = useDispatch()

  const list = () => (
    <Box
      sx={{ width: "90vw" }}
      role="presentation"
      onClick={() => dispatch(toggleDrawer())}
      onKeyDown={() => dispatch(toggleDrawer())}
    >
      <DrawerItemMaker />
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
