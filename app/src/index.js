import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Home from './containers/Home'
import cfg from './store'

import './index.scss'

const store = cfg.configStore()

ReactDOM.render(
	<div className="main-content">
		<nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-primary">
			<a className="navbar-brand" href="/">Navbar</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="/">Action</a>
							<a className="dropdown-item" href="/">Another action</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="/">Something else here</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
		<main id="main" className="container">
			<Provider store={ store }>
				<ConnectedRouter history = { cfg.history }>
					<Route exact path="/" component={ Home } />
				</ConnectedRouter>
			</Provider>
		</main>
	</div>,
	document.getElementById('root')
)