import { UserType } from 'api/users/types'

export type UsersSliceInitialStateType = {
  users: UserSupplementedType[]
  totalUsersCount: number
  isLoadingUsers: boolean
  term: string
  isLoadingTerm: boolean
  friend: FriendValuesType
  page: number
  pageCount: number
  isFollowed: boolean
  isLoadingFollowed: boolean
  isDisabledFollowed: boolean
}

export type UserSupplementedType = UserType & {
  followedStatus: FollowedStatusType
}

export type FollowedStatusType = {
  isDisabled: boolean
  isLoading: boolean
}

export type FriendValuesType = 'All' | 'Only followed' | 'Only unfollowed'
