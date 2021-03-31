import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ApiContext from '../Context/ApiContext';
import config from '../config';
import Moment from 'react-moment';

class Goal extends React.Component {
	static contextType = ApiContext;

	handleClickGoBack = () => {
		this.props.history.push('/dashboard');
	};

	handleClickDelete = () => {
		const goalId = parseInt(this.props.match.params.id);

		fetch(`${config.API_BASE_URL}/goals/${goalId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
			},
		}).then(() => {
			this.context.deleteGoal(goalId);
		});
		this.props.history.push('/dashboard');
	};

	render() {
		const oneGoal = this.context.goals.find(
			goal => goal.id === parseInt(this.props.match.params.id)
		);

		return (
			<div className='goals-container'>
				<div className='goals-list'>
					<div className='one-goal-item'>
						<div key={oneGoal.id} className='goal-item-info'>
							<h2 className='goals-header'>{oneGoal.goal_name}</h2>
							<div className='category-div'>
								<h4>Category:</h4>
								<span className='category'>{oneGoal.category}</span>
							</div>
							<div className='note-div'>
								<h4>Notes:</h4>
								<span className='goal-note'>{oneGoal.notes}</span>
							</div>
							<div className='date-div'>
								<h4>Date Added:</h4>
							<Moment format='dddd MMM D YYYY'>
								{oneGoal.post_date}
							</Moment>
							</div>
							<div className='button-container'>
								<Link to={`/edit-goal/${oneGoal.id}`}>
									<button type='submit' className='edit-goal-btn'>
										Edit
									</button>
								</Link>

								<button
									className='delete-goal-btn'
									type='submit'
									onClick={this.handleClickDelete}
								>
									Delete
								</button>

								<button
									className='go-back-btn'
									onClick={this.handleClickGoBack}
								>
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
