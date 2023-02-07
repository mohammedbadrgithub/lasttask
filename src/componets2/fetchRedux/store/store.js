import { configureStore } from '@reduxjs/toolkit'
import fetchmovie from "../redux/getmovie"
export const store = configureStore({
  reducer: {
    movie: fetchmovie
  },
})

