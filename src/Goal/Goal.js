import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import config from '../config';
import Moment from 'react-moment';
import { categories } from '../constants/categories';

class Goal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			goal_name: '',
			category: '',
			notes: '',
			post_date: '',
		};
	}

	componentDidMount() {
		const goalId = this.props.match.params.id;
		fetch(`${config.API_BASE_URL}/goals/${goalId}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then(res => {
				if (!res.ok) {
					return res.json().then(error => Promise.reject(error));
				}
				return res.json();
			})
			.then(goal => {
				this.setState({
					id: goal.id,
					goal_name: goal.goal_name,
					category: goal.category,
					notes: goal.notes,
					post_date: goal.post_date,
				});
			});
	}

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

		const { id, goal_name, category, notes, post_date } = this.state;

		return (
			<div className='goals-container'>
				<div className='goals-list'>
					<div className='one-goal-item'>
						<div key={id} className='goal-item-info'>
							<h2 className='goals-header'>{goal_name}</h2>
							<div className='category-div'>
								<h4>Category:</h4>
								<span className='category'>{categories[category]}</span>
							</div>
							<div className='note-div'>
								<h4>Notes:</h4>
								<span className='goal-note'>{notes}</span>
							</div>
							<div className='date-div'>
								<h4>Date Added:</h4>
								<Moment format='dddd MMM D YYYY'>{post_date}</Moment>
							</div>
							<div className='button-container'>
								<Link to={`/edit-goal/${id}`}>
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
