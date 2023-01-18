import { configureStore } from "@reduxjs/toolkit"

import user from "./userSlice"
import nav from "./navSlice"

export const store = configureStore({
	reducer: {
		user,
		nav,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
