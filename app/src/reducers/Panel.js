import * as ActionTypes from './../constants/ActionTypes'

export default function panels(state = [], action) {
	switch(action.type) {
		case ActionTypes.CREATE_PANEL:
			return [
				...state,
				action.payload
			]
		break;
		// case ActionTypes.EDIT_PANEL:
		// 	return state.map(card => {
		// 		const { id } = action.payload
		// 		if ( id === card.id ) return Object.assign({}, card, action.payload)
		// 		return card
		// 	})
		// break;
		// case ActionTypes.DELETE_PANEL:
		// 	const { id } = action.payload
		// 	return state.filter(card => id !== card.id)
		// break;
		default:
			return state
	}
}