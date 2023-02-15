import { createSlice } from "@reduxjs/toolkit"

const achivementDrawerReducer = createSlice({
  name: "achivementDrawerStateReducer",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})
export const { toggleDrawer } = achivementDrawerReducer.actions
export default achivementDrawerReducer.reducer
