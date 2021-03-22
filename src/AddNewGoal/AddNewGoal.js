import React from 'react';
import './addnewgoal.css';
import ValidationError from '../ValidationError/ValidationError';

class AddNewGoal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			goalName: {
				value: '',
				touched: false,
			},
			category: {
				value: '',
				touched: false,
			},
			notes: {
				value: '',
			},
		};
	}

	handleClickAddGoal = e => {
		e.preventDefault();
		const { goalName, category, notes } = this.state;
		if (category === '') {
			console.log(`don't submit`);
		} else {
			console.log(category);
			console.log(goalName);
			console.log(notes);

			// clear the fields after successful submit
			this.setState({
				goalName: {
					value: '',
					touched: false
				},
				category: {
					value: '',
					touched: false
				},
				notes: {
					value: '',
					touched: false
				}
			});
		}
		// bring user back to dashboard after goal submit
		this.props.history.push('/dashboard');
	};

	handleGoalNameChange = goalName => {
		this.setState({
			goalName: {
				value: goalName,
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
		const goalName = this.state.goalName.value.trim();
		if (goalName.length === 0) {
			return 'Your goal must have a name';
		}
	};

	validateCategory = () => {
		const category = this.state.category.value;
		if (category === '') {
			return 'Your goal must have a category'
		}
	}

	render() {
		const nameError = this.validateGoalName();
		const categoryError = this.validateCategory();

		return (
			<div>
				<header>
					<h1 className="addgoal">New Goal</h1>
				</header>
				<section>
					<form className="add-goal-form">
						<section className="form-section">
							<label htmlFor="goal-name">Goal:</label>
							<input
								type="text"
								name="goal-name"
								id="goal-name"
								placeholder="new goal"
								onChange={e => this.handleGoalNameChange(e.target.value)}
								required
							/>
						</section>

					{this.state.goalName.touched && <ValidationError message={nameError} />}

						<section className="goal-category">
							<label htmlFor="goal-category">Category:</label>
							<div className="goal-category">
								<select
									name="goal-category"
									id="goal-category"
									onChange={e => this.handleCategoryChange(e.target.value)}
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

						{this.state.category.touched && <ValidationError message={categoryError} />}

						<section className="goal-notes">
							<label htmlFor="goal-notes">Notes:</label>
							<textarea
								name="goal-notes"
								id="goal-notes"
								maxLength="75"
								placeholder="optional notes"
								onChange={e => this.handleNotesChange(e.target.value)}
							></textarea>
						</section>
			
						<div className="add-goal">
							<button type="submit" onClick={e => this.handleClickAddGoal(e)}>
								Add New Goal
							</button>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default AddNewGoal;
