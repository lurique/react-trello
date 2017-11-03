import React, { Component } from 'react'
import Card from './Card'
import CardInput from './CardInput'

class Cards extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const cards = this.props.cards.map(card => (
			<Card key= { card.id }>
				<CardInput
					id= { card.id }
					edit= { card.edit }
					text= { card.text }
					clickToEdit= { this.props.clickToEdit }
					editCard= { this.props.editCard }
					deleteCard= { this.props.deleteCard }
				/>
			</Card>
		))

		return (
			<ul>
				{ cards }
			</ul>
		)
	}
}

export default Cards