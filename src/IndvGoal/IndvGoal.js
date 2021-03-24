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
						<h2 className="goals-header">{goal.goalName}</h2>
					</Link>
					<div className="category-div">
						<h4>Category:</h4>
						<span className="category">{goal.category}</span>
					</div>
				</li>
				<div className="button-container">
					<Link to={`/edit-goal/${goal.id}`}>
						<button type="submit">Edit</button>
					</Link>
					{/* <button
						className="delete-goal-btn"
						type="submit"
						onClick={this.handleClickDelete}
					>
						Delete
					</button> */}
				</div>
			</div>
		);
	}
}

export default IndvGoal;
