import { AppReducerActionsType } from './actions'

const initState: InitStateType = {
	isLoading: false,
	isInitialized: false,
}

export const appReducer = (state: InitStateType = initState, action: AppReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'TOGGLE-IS-LOADING':
			return { ...state, isLoading: action.isLoading }
		case 'SET-IS-INITIALIZED':
			return { ...state, isInitialized: action.isInitialized }

		default:
			return state
	}
}

// types
type InitStateType = {
	isLoading: boolean
	isInitialized: boolean
}