import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../Context/ApiContext';

class IndvGoal extends React.Component {
	static contextType = ApiContext;

	render() {
		const { goal } = this.props;
		return (
			<div key={goal.id} className="goal-item">
				<li key={goal.id} className="list-goal-item">
					<Link to={`/goal/${goal.id}`}>
						<h2 className="goals-header">{goal.goal_name}</h2>
					</Link>
				</li>
				<div className="button-container">
					<Link to={`/edit-goal/${goal.id}`}>
						<button type="submit" className='edit-goal-btn'>Edit</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default IndvGoal;
