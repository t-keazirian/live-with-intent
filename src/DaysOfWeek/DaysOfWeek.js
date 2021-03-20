import React from 'react';
import './daysofweek.css';

class DaysOfWeek extends React.Component {
	render() {
		return (
			<section className="checkbox-section">
				<h3 className="days">On what days would you like to complete this goal:</h3>
				<input type="checkbox" id="monday" name="monday" value="Monday" />
				<label className="days" htmlFor="monday">
					Monday
				</label>
				<br />
				<input type="checkbox" id="tuesday" name="tuesday" value="Tuesday" />
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
				<input type="checkbox" id="thursday" name="thursday" value="Thursday" />
				<label className="days" htmlFor="thursday">
					Thursday
				</label>
				<br />
				<input type="checkbox" id="friday" name="friday" value="Friday" />
				<label className="days" htmlFor="friday">
					Friday
				</label>
				<br />
				<input type="checkbox" id="saturday" name="saturday" value="Saturday" />
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
		);
	}
}

export default DaysOfWeek;