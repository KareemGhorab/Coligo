import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"

interface NavState {
	isSideHidden: boolean
}

const initialState: NavState = {
	isSideHidden: true,
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		toggleSide: (state) => {
			state.isSideHidden = !state.isSideHidden
		},
		showSide: (state) => {
			state.isSideHidden = false
		},
	},
})

export const { showSide, toggleSide } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
