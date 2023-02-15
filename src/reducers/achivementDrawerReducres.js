import { createSlice } from "@reduxjs/toolkit"

const achivementDrawerReducer = createSlice({
  name: "achivementDrawerStateReducer",
  initialState: {
    isOpen: false,
    payload: [],
  },
  reducers: {
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen
    },
    toggleAddData: (state, action) => {
      state.payload = action.payload
      state.isOpen = !state.isOpen
    },
  },
})
export const { toggleDrawer, toggleAddData } = achivementDrawerReducer.actions
export default achivementDrawerReducer.reducer
