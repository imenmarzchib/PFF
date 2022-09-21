import { configureStore } from '@reduxjs/toolkit'
import reservation from './reservation'
import ServiceSlice from './ServiceSlice'
import userSlice from './userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    service:ServiceSlice,
    reservation:reservation,
  },
})