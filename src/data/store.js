import { configureStore } from "@reduxjs/toolkit"
import achivementDrawerReducer from "../reducers/achivementDrawerReducres"
export default configureStore({
  reducer: {
    achivementDrawerStateReducer: achivementDrawerReducer,
  },
})
