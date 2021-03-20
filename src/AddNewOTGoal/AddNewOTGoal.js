import React from 'react';
import CategoryList from '../CategoryList/CategoryList';
import './otgoal.css';

class AddNewOTGoal extends React.Component {
	render() {
		return (
			<div>
				<header>
					<h1 className="addgoal">New One-Time Goal</h1>
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
								required
							/>
						</section>

						<section className="goal-category">
							<label htmlFor="goal-category">Goal category:</label>
							<CategoryList />
						</section>

						<section className="goal-notes">
							<label htmlFor="goal-notes">Goal Notes:</label>
							<textarea
								name="goal-notes"
								id="goal-notes"
								maxLength="75"
								placeholder="optional notes"
							></textarea>
						</section>
						<section className="date">
							<label htmlFor="date">Date to Complete:</label>
							<input type="date" id="date" name="date" required />
						</section>
						<div className="add-goal">
							<button type="submit">Add New Goal</button>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default AddNewOTGoal;
