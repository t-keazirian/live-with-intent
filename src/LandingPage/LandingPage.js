import React from 'react';
import './landingpage.css';

class LandingPage extends React.Component {
	render() {
		return (
			<div className="landing-page">
				<header className="main-header">
					<h1>Live With Intent</h1>
					<h2>take your goals into your own hands</h2>
				</header>
				<section className="experience-section">
					<header>
						<h3>Experience Living With Intention</h3>
					</header>
					<p>
						[<em>placeholder for screenshot of goal tracker interface</em>]
					</p>
					<p>
						Do you have a never ending list of goals or ambitions in your head?
						Do you ever feel overwhelmed, like you don't even know where to
						start? Live With Intent helps you keep track of your goals. You can
						transform your life and start achieving all your goals, whether big
						or small, and keep track of your progress.
					</p>
				</section>
				<section className="add-goal-section">
					<header>
						<h3>Add your goals</h3>
					</header>
					<p>
						If you love having a list, and then ticking a box when something is
						completed, Live With Intent is for you. Live With Intent provides
						you with a simple interface to record your goals, keep track of what
						you have accomplished, and reflect on your habits.
					</p>
				</section>
				<section className="track-section">
					<header>
						<h3>Track your progress</h3>
					</header>
					<p>
						The key to accomplishing your goals is to track them. You will start
						to build confidence as you see yourself completing each new daily or
						weekly goal. You'll find yourself looking forward to adding in a new
						goal, and seeing your progress unfold.
					</p>
				</section>
				<div>
					<header>
						<h3>Start Living With Intent Today</h3>
					</header>
				</div>
				<section className="start-section">
					<form className="signup-form">
						<div className="form-container">
							<div className="item">
								<label htmlFor="first-name">First name:</label>
								<input
									type="text"
									name="first-name"
									id="first-name"
									placeholder="First Name"
									required
								/>
							</div>
							<div className="item">
								<label htmlFor="last-name">Last name:</label>
								<input
									type="text"
									name="last-name"
									id="last-name"
									placeholder="Last Name"
									required
								/>
							</div>
							<div className="item">
								<label htmlFor="username">Email:</label>
								<input
									type="text"
									name="username"
									id="username"
									placeholder="example@abc.com"
									required
								/>
							</div>
							<div className="item">
								<label htmlFor="password">Password:</label>
								<input
									type="text"
									name="password"
									id="password"
									placeholder="type your password"
									required
								/>
							</div>
						</div>
						<button type="submit">Sign Up</button>
					</form>
				</section>
			</div>
		);
	}
}

export default LandingPage;
