import React from 'react';
import GOALS from '../store';
import { withRouter, Link } from 'react-router-dom';

class Goal extends React.Component {
	handleCancel = () => {
		this.props.history.push('/dashboard');
	};

	render() {
		const oneGoal = GOALS.find(
			goal => goal.id === parseInt(this.props.match.params.id)
		);

		return (
			<div className="goals-container">
				<div className="goals-list">
					<div className="one-goal-item">
						<div key={oneGoal.id} className="goal-item">
							<h2 className="goals-header">{oneGoal.goalName}</h2>
							<p className="category">{oneGoal.category}</p>
							<p className="goal-note">{oneGoal.notes}</p>

							<div className="button-container">
								<Link to="/edit-goal">
									<button type="submit" onClick={this.handleClickEdit}>
										Edit
									</button>
								</Link>
								<button className="delete-goal-btn" type="submit">
									Delete
								</button>
								<button className="go-back" onClick={this.handleCancel}>
									Go Back
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Goal);
