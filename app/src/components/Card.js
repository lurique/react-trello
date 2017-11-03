import React, { Component } from 'react'

class Card extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<li className="col-md-12">
				{ this.props.children }
			</li>
		)
	}
}

export default Card