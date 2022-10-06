import { RootStateType } from 'store'
import { UserProfileType } from 'api/profile/types'

export const selectUserProfile = (state: RootStateType): UserProfileType => state.profile.userProfile

export const selectStatus = (state: RootStateType): string => state.profile.status

export const selectIsLoadingUserProfile = (state: RootStateType): boolean => state.profile.isLoadingUserProfile
