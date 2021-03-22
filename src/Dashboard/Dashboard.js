import React from 'react';
import './dashboard.css';
import TotalGoals from '../TotalGoals/TotalGoals';
import { Link } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList';

class Dashboard extends React.Component {

	render() {
		return (
			<div className="dashboard">
				<section className="buttons">
					<Link to="/add-new-goal">
						<button className="add-one-time">Add Goal</button>
					</Link>
				</section>
				<section className="goal-summary-container">
					<div className="goal-summary">
						<h3 className="goal-header">Viewing __ Total Goals</h3>
					</div>
					<div className="goals-filter">
						<input
							type="text"
							className="name-search"
							placeholder="Search goals by name"
						/>

						<CategoryList />

					</div>
				</section>

				<TotalGoals />
			</div>
		);
	}
}

export default Dashboard;
