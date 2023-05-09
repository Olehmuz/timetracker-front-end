import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import trackerSlice from './slices/trackerSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		tracker: trackerSlice
	},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch