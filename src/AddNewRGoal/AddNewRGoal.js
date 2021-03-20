import React from 'react';
import './rgoal.css';

class AddNewRGoal extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className='add-new-recurring'>
				<header>
					<h1 className='addgoal'>New Recurring Goal</h1>
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
						<section className="checkbox-section">
							<h3>On what days would you like to complete this goal:</h3>
							<input type="checkbox" id="monday" name="monday" value="Monday" />
							<label className="days" htmlFor="monday">
								Monday
							</label>
							<br />
							<input
								type="checkbox"
								id="tuesday"
								name="tuesday"
								value="Tuesday"
							/>
							<label className="days" htmlFor="tuesday">
								Tuesday
							</label>
							<br />
							<input
								type="checkbox"
								id="wednesday"
								name="wednesday"
								value="Wednesday"
							/>
							<label className="days" htmlFor="wednesday">
								Wednesday
							</label>
							<br />
							<input
								type="checkbox"
								id="thursday"
								name="thursday"
								value="Thursday"
							/>
							<label className="days" htmlFor="thursday">
								Thursday
							</label>
							<br />
							<input type="checkbox" id="friday" name="friday" value="Friday" />
							<label className="days" htmlFor="friday">
								Friday
							</label>
							<br />
							<input
								type="checkbox"
								id="saturday"
								name="saturday"
								value="Saturday"
							/>
							<label className="days" htmlFor="saturday">
								Saturday
							</label>
							<br />
							<input type="checkbox" id="sunday" name="sunday" value="Sunday" />
							<label className="days" htmlFor="sunday">
								Sunday
							</label>
							<br />
						</section>
						<button type="submit">Add New Goal</button>
					</form>
				</section>
			</div>
		);
	}
}

export default AddNewRGoal;
