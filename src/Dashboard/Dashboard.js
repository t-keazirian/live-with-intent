import React from 'react';
import './dashboard.css';
import TotalGoals from '../TotalGoals/TotalGoals';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
	render() {
		return (
			<div className="dashboard">
				<section className="buttons">
					<Link to="/add-new-recurring">
						<button className="add-recurring">Add Recurring Goal</button>
					</Link>
					<Link to="/add-new-onetime">
						<button className="add-one-time">Add One-Time Goal</button>
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
						<select name="goal-category" id="goal-category">
							<option value="" defaultValue="" selected>
								Search by Category
							</option>
							<option value="get-fit">Get Fit</option>
							<option value="nutrition">Nutrition</option>
							<option value="personal-growth">Personal Growth</option>
							<option value="learn-skill">Learn A Skill</option>
							<option value="be-productive">Be Productive</option>
							<option value="mindfulness">Mindfulness</option>
							<option value="sleep">Sleep</option>
						</select>
						<select name="goal-type" id="goal-type">
							<option value="" defaultValue="">
								Search by Type
							</option>
							<option value="one-time">One-Time Goals</option>
							<option value="recurring">Recurring Goals</option>
						</select>
					</div>
				</section>

				<TotalGoals />
			</div>
		);
	}
}

export default Dashboard;
