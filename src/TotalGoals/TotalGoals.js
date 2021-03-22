import React from 'react';
import './totalgoals.css';
import DeleteGoalBtn from '../DeleteGoal/DeleteGoalBtn';
import EditGoalBtn from '../EditGoalBtn/EditGoalBtn';

class TotalGoals extends React.Component {	

	render() {
		return (
			<div className="total-goals">
				<div className="goals-container">
					<div className="goals-list">
						<div className="goal-item">
							<h2 className="goals-header">Brush Teeth</h2>
							<div>
								<span className="category">Get Fit</span>
							</div>
							<div className="goal-note">
								<span>Brush teeth 2x per day</span>
							</div>
							<div className="button-container">
								<EditGoalBtn />
								<DeleteGoalBtn />
							</div>
						</div>

						<div className="goal-item">
							<h2 className="goals-header">Journal</h2>
							<div>
								<span className="category">Personal Growth</span>
							</div>
							<div className="goal-note">
								<span>Journal 1x per day</span>
							</div>
							<div className="button-container">
								<EditGoalBtn />
								<DeleteGoalBtn />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TotalGoals;
