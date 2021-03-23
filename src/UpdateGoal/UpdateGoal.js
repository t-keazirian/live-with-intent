import React from 'react';

class UpdateGoal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			goalName: '',
			category: '',
			notes: '',
		};
	}

	handleNameChange = e => {
		this.setState({
			goalName: e.target.value,
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

	handleSubmit = e => {
		e.preventDefault();
		const { goalName, category, notes } = this.state;
		const newGoal = { goalName, category, notes };
    console.log('clicked');
	};

	render() {
		const { goalName, category, notes } = this.state;
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
                value={goalName}
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
							<button type="submit">
								Update Goal
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