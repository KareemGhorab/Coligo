import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"
import jwt_decode from "jwt-decode"
import { User } from "interfaces/User"

interface UserState {
	user?: User
}

const initialState: UserState = {}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		check: (state) => {
			try {
				const token = localStorage.getItem("TOKEN")
				if (!token) return

				const decoded: User = jwt_decode(token)
				state.user = decoded
			} catch (error) {
				console.log(error)
				return
			}
		},
		signin: (state, action: PayloadAction<string>) => {
			try {
				const decoded: User = jwt_decode(action.payload)
				localStorage.setItem("TOKEN", action.payload)
				state.user = decoded
			} catch (error) {
				console.log(error)
				return
			}
		},
		signout: (state) => {
			localStorage.setItem("TOKEN", "")
			state.user = undefined
		},
	},
})

export const { signin, signout, check } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
