import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCaptchaUrl, getUserData, login, logOut } from 'store/asyncActions/auth'
import { InitialStateType, UserDataType } from './types'

const initialState: InitialStateType = {
	isAuth: false,
	isInitializedApp: false,
	userData: null,
	captchaUrl: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getUserData.fulfilled, (state, action: PayloadAction<UserDataType>) => {
				state.userData = action.payload
				state.isAuth = true
				state.isInitializedApp = true
			})
			.addCase(getUserData.rejected, (state) => {
				state.isInitializedApp = true
			})
			.addCase(getCaptchaUrl.fulfilled, (state, action) => {
				state.captchaUrl = action.payload
			})
			.addCase(logOut.fulfilled, (state) => {
				state.userData = null
				state.isAuth = false
			})
			.addCase(login.fulfilled, (state) => {
				state.captchaUrl = null
			})
	},
})

export const { setIsAuth } = authSlice.actions

export default authSlice.reducer