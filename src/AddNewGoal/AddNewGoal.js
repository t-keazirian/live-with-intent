import React from 'react';
import './addnewgoal.css';
import ValidationError from '../ValidationError/ValidationError';
import ApiContext from '../Context/ApiContext';
import config from '../config';

class AddNewGoal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			goal_name: {
				value: '',
				touched: false,
			},
			category: {
				value: '',
				touched: false,
			},
			notes: {
				value: '',
				touched: false
			},
		};
	}

	static contextType = ApiContext;

	handleSubmit = e => {
		e.preventDefault();
		const { goal_name, category, notes } = this.state;
		const newGoal = {
			goal_name: goal_name.value,
			category: category.value,
			notes: notes.value,
		};

		fetch(`${config.API_BASE_URL}/goals`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newGoal),
		})
			.then(res => {
				if (!res.ok) {
					return res.json().then(error => Promise.reject(error));
				}
				return res.json();
			})
			.then(goal => {
				this.context.addGoal(goal);
				this.props.history.push('/dashboard');
			});
	};

	handleGoalNameChange = goal_name => {
		this.setState({
			goal_name: {
				value: goal_name,
				touched: true,
			},
		});
	};

	handleCategoryChange = category => {
		this.setState({
			category: {
				value: category,
				touched: true,
			},
		});
	};

	handleNotesChange = notes => {
		this.setState({
			notes: {
				value: notes,
				touched: true,
			},
		});
	};

	validateGoalName = () => {
		const goal_name = this.state.goal_name.value.trim();
		if (goal_name.length === 0) {
			return 'Your goal must have a name';
		}
	};

	validateCategory = () => {
		const category = this.state.category.value;
		if (category === '') {
			return 'Your goal must have a category';
		}
	};

	validateNotes = () => {
		const notes = this.state.notes.value.trim();
		if (notes === '') {
			return 'Your goal must have notes';
		}
	};

	handleCancel = () => {
		this.props.history.push('/dashboard');
	};

	render() {
		const { goal_name, category, notes } = this.state;
		const nameError = this.validateGoalName();
		const categoryError = this.validateCategory();
		const notesError = this.validateNotes();

		return (
			<div>
				<header>
					<h1 className="addgoal">New Goal</h1>
				</header>
				<div className='add-goal-div'>
				<section className="add-goal-section">
					<form className="add-goal-form" onSubmit={e => this.handleSubmit(e)}>
						<section className="form-section">
							<label htmlFor="goal-name">Goal:</label>
							<input
								type="text"
								name="goal-name"
								id="goal-name"
								placeholder="New Goal"
								value={goal_name.value}
								onChange={e => this.handleGoalNameChange(e.target.value)}
								required
							/>
						</section>

						{this.state.goal_name.touched && (
							<ValidationError message={nameError} />
						)}

						<section className="goal-category">
							<label htmlFor="goal-category">Category:</label>
							<div className="goal-category">
								<select
									name="goal-category"
									id="goal-category"
									onChange={e => this.handleCategoryChange(e.target.value)}
									value={category.value}
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

						{this.state.category.touched && (
							<ValidationError message={categoryError} />
						)}

						<section className="goal-notes">
							<label htmlFor="goal-notes">Notes:</label>
							<textarea
								name="goal-notes"
								id="goal-notes"
								maxLength="75"
								placeholder="Notes"
								onChange={e => this.handleNotesChange(e.target.value)}
								value={notes.value}
								required
							></textarea>
						</section>

						{this.state.notes.touched && (
							<ValidationError message={notesError} />
						)}

						<div className="add-goal">
							<button
								type="submit"
								className="add-goal-btn"
								disabled={
									this.validateCategory() ||
									this.validateGoalName() ||
									this.validateNotes()
								}
							>
								Add New Goal
							</button>
							<button className="cancel-btn" onClick={this.handleCancel}>
								Cancel
							</button>
						</div>
					</form>
				</section>
				</div>
			</div>
		);
	}
}

export default AddNewGoal;
