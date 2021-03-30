import React from 'react';
import './dashboard.css';
import TotalGoals from '../TotalGoals/TotalGoals';
import { Link } from 'react-router-dom';
import ApiContext from '../Context/ApiContext';

class Dashboard extends React.Component {
	static contextType = ApiContext;

	render() {
		return (
			<div className='dashboard'>
				<section className='buttons'>
					<Link to='/add-new-goal'>
						<button className='add-goal-btn'>Add New Goal</button>
					</Link>
				</section>
				<section className='goal-summary-container'>
					<div className='goal-summary'>
						<h3 className='goal-header'>
							Viewing {this.context.goals.length} Total Goals
						</h3>
					</div>
				</section>
				<TotalGoals />
			</div>
		);
	}
}

export default Dashboard;
