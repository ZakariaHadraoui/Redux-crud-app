import { createSlice } from "@reduxjs/toolkit";
import { userlist } from "./data";

export const userslice = createSlice({
	name: 'userslice',
	initialState: userlist,
	reducers: {
		addUser(state, action) {
			state.push(action.payload)
		},
		deleteUser(state, action) {
			return state.filter((ele) => ele.id !== action.payload)
		},
		updateUser(state, action) {
			const { name, id, email } = action.payload
			const uu = state.find(ele => ele.id == id)
			if (uu) {
				uu.name = name
				uu.email = email
			}
		},

	}
})
export default userslice.reducer
export const { addUser, deleteUser,updateUser } = userslice.actions