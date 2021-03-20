import React from 'react';

class TotalGoals extends React.Component {
	render() {
		return (
			<div className="total-goals">
				<header>
					<h1>Total Goals</h1>
				</header>
				<div className="goals-container">
					<div className="goals-list">
						<div className="item">

							<h2>Brush Teeth</h2>
							<span>Brush teeth 2x per day</span>
							<div className="button-container">
								<button type="submit">Edit Goal</button>
								<button type="submit">Delete Goal</button>
							</div>
						</div>

						<div className="item">
							<h2>Journal</h2>
							<span>Journal once per day</span>
							<div className="button-container">
								<button type="submit">Edit Goal</button>
								<button type="submit">Delete Goal</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TotalGoals;
