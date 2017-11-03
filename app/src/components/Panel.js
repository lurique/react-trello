import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards'

import { connect } from 'react-redux'
import CardActions from './../actions/CardActions'

class Panel extends Component {
	static propTypes = {
		createCard: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)

		this.handleCreateCard = this.handleCreateCard.bind(this)
	}

	handleCreateCard() {
		this.props.createCard()
	}

	render() {
		const { cards } = this.props

		return (
			<div className="col">
				<div className="card card-default">
					<div className="card-heading">
						<h2>Header card</h2>
					</div>
					<div className="card-body">
						<Cards
							cards= { cards }
							clickToEdit= { this.props.editCard }
							editCard= { this.props.editCard }
							deleteCard= { this.props.deleteCard }
						/>
					</div>
					<div className="card-footer">
						<button type="button" className="btn btn-primary" onClick={ this.handleCreateCard }>+ Card</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cards: state.cards
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createCard: () => dispatch(CardActions.createCard('New task')),
		editCard: (id, value) => {
			const edited = { id }

			if ( !value ) {
				edited.edit = true
			} else {
				edited.edit = false
				edited.text = value
			}

			dispatch(CardActions.editCard(edited))
		},
		deleteCard: (id) => dispatch(CardActions.deleteCard(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)