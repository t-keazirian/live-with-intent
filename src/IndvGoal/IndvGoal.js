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
					<div className="category-div">
						{/* <h4>Category:</h4> */}
						<p className="category">{goal.category}</p>
					</div>
				</li>
				<div className="button-container">
					<Link to={`/edit-goal/${goal.id}`}>
						<button type="submit">Edit</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default IndvGoal;
