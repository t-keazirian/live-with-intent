import React from 'react';
import ApiContext from '../Context/ApiContext';
import config from '../config';

class UpdateGoal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			goal_name: '',
			category: '',
			notes: '',
		};
	}

	static contextType = ApiContext;

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
				});
			});
	}

	handleNameChange = e => {
		this.setState({
			goal_name: e.target.value,
		});
	};

	handleCategoryChange = e => {
		this.setState({
			category: e.target.value,
		});
	};

	handleNotesChange = e => {
		this.setState({
			notes: e.target.value,
		});
	};

	handleCancel = () => {
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

	handleSubmit = e => {
		e.preventDefault();
		const { id, goal_name, category, notes } = this.state;
		const goalId = parseInt(this.props.match.params.id);
		const updatedGoal = { id, goal_name, category, notes };

		fetch(`${config.API_BASE_URL}/goals/${goalId}`, {
			method: 'PATCH',
			body: JSON.stringify(updatedGoal),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then(res => {
				if (!res.ok) {
					return res.json().then(error => Promise.reject(error));
				}
			})
			.then(() => {
				this.context.updateGoal(updatedGoal);
			});

		this.props.history.push('/dashboard');
	};

	render() {
		const { goal_name, category, notes } = this.state;
		return (
			<div>
				<header>
					<h1 className="edit-goal">Goal</h1>
				</header>
				<section>
					<form className="edit-goal-form" onSubmit={this.handleSubmit}>
						<section className="form-section">
							<label htmlFor="edit-goal-name">Edit Goal:</label>
							<input
								type="text"
								name="edit-goal-name"
								id="edit-goal-name"
								value={goal_name}
								onChange={this.handleNameChange}
								required
							/>
						</section>

						<section className="goal-category">
							<label htmlFor="edit-goal-category">Category:</label>
							<div className="goal-category">
								<select
									name="edit-goal-category"
									id="edit-goal-category"
									onChange={this.handleCategoryChange}
									value={category}
								>
									<option value="">Choose Category</option>
									<option value="get-fit">Get Fit</option>
									<option value="nutrition">Nutrition</option>
									<option value="personal-growth">Personal Growth</option>
									<option value="learn-skill">Learn A Skill</option>
									<option value="be-productive">Be Productive</option>
									<option value="mindfulness">Mindfulness</option>
									<option value="sleep">Sleep</option>
								</select>
							</div>
						</section>

						<section className="goal-notes">
							<label htmlFor="edit-goal-notes">Notes:</label>
							<textarea
								name="edit-goal-notes"
								id="edit-goal-notes"
								maxLength="75"
								onChange={this.handleNotesChange}
								value={notes}
							></textarea>
						</section>

						<div className="edit-goal">
							<button type="submit">Update</button>
							<button
								className="delete-goal-btn"
								type="submit"
								onClick={this.handleClickDelete}
							>
								Delete
							</button>
							<button className="go-back" onClick={this.handleCancel}>
								Cancel
							</button>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default UpdateGoal;
