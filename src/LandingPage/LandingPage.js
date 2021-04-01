import React from 'react';
import './landingpage.css';
import SignUpForm from '../SignUpForm/SignUpForm';

class LandingPage extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		alert(
			'This app is in beta testing. Click on Dashboard above to try it out!'
		);
	};

	render() {
		return (
			<div className='landing-page'>
				<header className='main-header'>
					<h1>Live With Intent</h1>
					<h2 className='intro'>take your goals into your own hands</h2>
				</header>
				<section className='experience-section'>
					<header>
						<h3>Experience Living With Intention</h3>
					</header>
					<p>
						[
						<em>
							Click <strong>Dashboard</strong> above to try it out!
						</em>
						]
					</p>
					<p>
						Do you have a never ending list of goals or ambitions in your head?
						Do you ever feel overwhelmed, like you don't even know where to
						start? Live With Intent helps you keep track of your goals. You can
						transform your life and start achieving all your goals, whether big
						or small, and keep track of your progress.
					</p>
				</section>
				<section className='add-goal-intro'>
					<header>
						<h3>Add your goals</h3>
					</header>
					<p>
						Live With Intent provides you with a simple interface to record your
						goals, keep track of what you have accomplished, and reflect on your
						habits.
					</p>
				</section>
				<section className='track-section'>
					<header>
						<h3>Track your progress</h3>
					</header>
					<p>
						You will start to build confidence as you see yourself completing
						each new daily or weekly goal. You'll find yourself looking forward
						to adding in a new goal, and seeing your progress unfold.
					</p>
				</section>
				<div>
					<header>
						<h3 className='start-h3'>Start Living With Intent Today</h3>
					</header>
				</div>
				<p className='beta'>
					This app is still in beta testing. Click Dashboard above to try it!
				</p>
				<section className='start-section'>
					<SignUpForm />
				</section>
			</div>
		);
	}
}

export default LandingPage;
