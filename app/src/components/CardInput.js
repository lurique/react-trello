import React, { Component } from 'react'

class CardInput extends Component {
	constructor(props) {
		super(props)

		this.handleClickToEdit = this.handleClickToEdit.bind(this)
		this.handleEditCard = this.handleEditCard.bind(this)
		this.handleDeleteCard = this.handleDeleteCard.bind(this)
	}

	handleClickToEdit() {
		this.props.clickToEdit(this.props.id)
	}

	handleEditCard(e) {
		if ( e.type === 'keypress' && e.key !== 'Enter' ) {
			return
		}

		const text = e.target.value
		const { id } = this.props

		if ( text.trim().length ) {
			this.props.editCard(id, text)
		}
	}

	handleDeleteCard() {
		const { id } = this.props
		this.props.deleteCard(id)
	}

	renderInput() {
		return (
			<div>
				<input type="text"
							 className="form-control"
							 defaultValue={ this.props.text }
							 onBlur= { this.handleEditCard }
							 onKeyPress= { this.handleEditCard } />
			</div>
		)
	}

	renderText() {
		return (
			<div className="row">
				<div className="col-xs-10">
					<input type="text"
								 className="form-control"
								 defaultValue={ this.props.text }
								 onClick={ this.handleClickToEdit }
								 readOnly />
				</div>
				<div className="col-xs-2">
					<button type="button" className="btn btn-danger btn-block" onClick={ this.handleDeleteCard }>Delete</button>
				</div>
			</div>
		)
	}

	render() {
		if ( this.props.edit ) {
			return this.renderInput()
		}

		return this.renderText()
	}
}

export default CardInput