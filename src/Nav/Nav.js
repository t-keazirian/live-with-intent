import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {

	render() {
		return (
			<nav className="nav">
				<Link to="/">Live With Intent</Link>
				<Link to="/dashboard">Dashboard</Link>
			</nav>
		);
	}
}

export default Nav;
