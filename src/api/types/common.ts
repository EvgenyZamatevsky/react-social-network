import { Nullable } from 'types'

export type CommonResponseType<T = {}> = {
	data: T,
	fieldsErrors: string[],
	messages: string[],
	resultCode: number
}

export type PhotosType = {
	large: Nullable<string>
	small: Nullable<string>
}