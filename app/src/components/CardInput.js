import React, { Component } from 'react'

class CardInput extends Component {
	constructor(props) {
		super(props)

		this.handleClickToEdit = this.handleClickToEdit.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
		this.handleDeleteCard = this.handleDeleteCard.bind(this)
	}

	handleClickToEdit() {
		this.props.clickToEdit(this.props.id)
	}

	handleEdit(e) {
		if ( e.type === 'keypress' && e.key !== 'Enter' ) {
			return
		}

		const text = e.target.value
		const { id } = this.props

		if ( text.trim().length ) {
			this.props.editComponent(id, text)
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
							 onBlur= { this.handleEdit }
							 onKeyPress= { this.handleEdit } />
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
					<button type="button" className="btn btn-danger btn-block" onClick={ this.handleDeleteCard }>Archive</button>
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