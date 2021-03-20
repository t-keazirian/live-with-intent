import React from 'react';

class TotalGoals extends React.Component {
	render() {
		return (
			<div className="total-goals">
				<header>
					<h1>Total Goals</h1>
				</header>
				<section className="goals-container">
					<ul className="goals-list">
						<li className="item">
							{/* link to specific goal */}

							<h2>Brush Teeth</h2>
							<p>Brush teeth 2x per day</p>
							<div className="button-container">
								<button type="submit">Edit Goal</button>
								<button type="submit">Delete Goal</button>
							</div>
						</li>

						<li className="item">
							<h2>Journal</h2>
							<p>Journal once per day</p>
							<div className="button-container">
								<button type="submit">Edit Goal</button>
								<button type="submit">Delete Goal</button>
							</div>
						</li>
					</ul>
				</section>
			</div>
		);
	}
}

export default TotalGoals;
