import { instance } from './config'
import { CommonResponseType } from './types'
import { SavePhotoResponseDataType, UserProfileType } from './types/profile'

export const PROFILE = {
	getUsersProfile(userId: number) {
		return instance.get<UserProfileType>(`profile/${userId}`)
	},
	getUserStatus(userId: number) {
		return instance.get<string>(`profile/status/${userId}`)
	},
	changeUserStatus(status: string) {
		return instance.put<CommonResponseType>('profile/status', { status })
	},
	updateUserPhoto(image: File) {
		const formData = new FormData()
		formData.append('image', image)
		return instance.put<CommonResponseType<SavePhotoResponseDataType>>('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	updateUserProfile(updatedUserProfile: UserProfileType) {
		return instance.put<CommonResponseType>('profile', updatedUserProfile)
	},
}
