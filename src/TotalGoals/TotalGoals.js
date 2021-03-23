import React from 'react';
import './totalgoals.css';
import { Link } from "react-router-dom";
import GOALS from '../store';

class TotalGoals extends React.Component {

	handleClickDelete() {
		console.log('clicked');
	}

	handleClickEdit() {
		console.log('clicked');
	}

	render() {
		return (
			<div className="total-goals">
				<div className="goals-container">
					<div className="goals-list">
						<ul>
							{GOALS.map(goal => (
								<div key={goal.id} className="goal-item">
									<li key={goal.id} className="goal-item">
										<h2 className="goals-header">{goal.goalName}</h2>
										<p className="category">{goal.category}</p>
										<p className="goal-note">{goal.notes}</p>
									</li>
									<div className="button-container">
									<Link to='/edit-goal'>
										<button type="submit" onClick={this.handleClickEdit}>
											Edit
										</button>
										</Link>
										<button
											className="delete-goal-btn"
											type="submit"
											onClick={this.handleClickDelete}
										>
											Delete
										</button>
									</div>
								</div>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default TotalGoals;
