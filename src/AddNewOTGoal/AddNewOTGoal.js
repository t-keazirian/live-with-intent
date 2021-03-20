import React from 'react';
import './otgoal.css';

class AddNewOTGoal extends React.Component {
	// constructor() {
	//   super()
	// }

	render() {
		return (
			<div>
				<header>
					<h1 className='addgoal'>New One-Time Goal</h1>
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
							<select name="goal-category" id="goal-category" required>
								<option value="" selected disabled>
									Choose Category
								</option>
								<option value="get-fit">Get Fit</option>
								<option value="nutrition">Nutrition</option>
								<option value="personal-growth">Personal Growth</option>
								<option value="learn-skill">Learn A Skill</option>
								<option value="be-productive">Be Productive</option>
								<option value="mindfulness">Mindfulness</option>
								<option value="sleep">Sleep</option>
							</select>
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

						<button type="submit">Add New Goal</button>
					</form>
				</section>
			</div>
		);
	}
}

export default AddNewOTGoal;
