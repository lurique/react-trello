import React, { Component } from 'react'
import Panel from './Panel'

class Panels extends Component {
	render() {
		const panels = this.props.panels.map(panel => (
			<Panel
				key= { panel.id }
				panel= { panel }
				editComponent= { this.props.editPanel } />
		))

		return (
			<div className="row">
				{ panels }
			</div>
		)
	}
}

export default Panels