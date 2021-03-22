import React from 'react';
import './totalgoals.css';
import DeleteGoalBtn from '../DeleteGoal/DeleteGoalBtn';
import EditGoalBtn from '../EditGoalBtn/EditGoalBtn';
import GOALS from '../store';

class TotalGoals extends React.Component {
	render() {
		return (
			<div className="total-goals">
				<div className="goals-container">
					<div className="goals-list">
						<ul>
							{GOALS.map(goal => (
								<div className="goal-item">
									<li key={goal.id} className="goal-item">
										<h2 className="goals-header">{goal.goalName}</h2>
										<p className="category">{goal.category}</p>
										<p className="goal-note">{goal.notes}</p>
									</li>
									<div className="button-container">
										<EditGoalBtn />
										<DeleteGoalBtn />
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
