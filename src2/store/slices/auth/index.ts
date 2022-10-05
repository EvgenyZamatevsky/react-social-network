import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthorizedUserDataType } from 'api/auth/types'
import { EMPTY_STRING } from 'constants/base'
import { getAuthorizedUserData, getCaptchaUrl, logOut } from 'store/asyncActions'
import { AuthSliceInitialStateType } from './types'

const initialState: AuthSliceInitialStateType = {
  authorizedUserData: null,
  isAuth: false,
  captchaUrl: EMPTY_STRING,
}

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAuthorizedUserData.fulfilled, (state, action: PayloadAction<AuthorizedUserDataType>) => {
        state.authorizedUserData = action.payload
        state.isAuth = true
        state.captchaUrl = EMPTY_STRING
      })
      .addCase(logOut.fulfilled, (state) => {
        state.authorizedUserData = null
        state.isAuth = false
      })
      .addCase(getCaptchaUrl.fulfilled, (state, action: PayloadAction<string>) => {
        state.captchaUrl = action.payload
      })
  },
})

export default authSlice.reducer

export const {} = authSlice.actions
