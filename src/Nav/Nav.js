import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
	render() {
		return (
			<div className="nav">
				<Link className="nav-link" to="/">
					Live With Intent
				</Link>
				<Link className="nav-link" to="/dashboard">
					Dashboard
				</Link>
			</div>
		);
	}
}

export default Nav;
