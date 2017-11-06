import * as ActionTypes from './../constants/ActionTypes'
import uuid from 'uuid/v4'

const createPanel = (value) => {
	return {
		type: ActionTypes.CREATE_PANEL,
		payload: {
			id: uuid(),
			text: value,
			cards: []
		}
	}
}

const editPanel = (edited) => {
	return {
		type: ActionTypes.EDIT_PANEL,
		payload: edited
	}
}

export default {
	createPanel,
	editPanel
}