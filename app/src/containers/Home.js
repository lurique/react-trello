import React, { Component } from 'react'
import { connect } from 'react-redux'
import Panels from './../components/Panels'
import PanelActions from './../actions/PanelActions'

import './Home.scss'

class Home extends Component {
	constructor(props) {
		super(props)

		this.handleCreatePanel = this.handleCreatePanel.bind(this)
	}

	handleCreatePanel() {
		this.props.createPanel()
	}

	render() {
		const { panels } = this.props

		return (
			<div className="row">
				<div className="col-xs-12">
					<button className="btn btn-primary" onClick={ this.handleCreatePanel }>+ Panel</button>
				</div>
				
				<Panels
					panels= { panels }
					editPanel= { this.props.editPanel } />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		panels: state.panels
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createPanel: () => dispatch(PanelActions.createPanel('New Panel')),
		editPanel: (id, value) => {
			const edited = { id }

			if ( !value ) {
				edited.edit = true
			} else {
				edited.edit = false
				edited.text = value
			}

			dispatch(PanelActions.editPanel(edited))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)