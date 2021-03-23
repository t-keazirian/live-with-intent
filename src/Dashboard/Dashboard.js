import React from 'react';
import './dashboard.css';
import TotalGoals from '../TotalGoals/TotalGoals';
import { Link } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList';
import GOALS from '../store';

class Dashboard extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		searchTerm: ''
	// 	}
	// }

	// editSearchTerm = e => {
	// 	this.setState({
	// 		searchTerm: e.target.value
	// 	})
	// }

	// dynamicSearch = () => {
	// 	return GOALS.filter(goal => goal.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
	// }

	constructor(props) {
		super(props);
		this.state = {
			search: null
		}
	}

	handleSearch = e => {
		this.setState({
			search: e.target.value
		})
	}

	render() {
		return (
			<div className="dashboard">
				<section className="buttons">
					<Link to="/add-new-goal">
						<button className="add-one-time">Add Goal</button>
					</Link>
				</section>
				<section className="goal-summary-container">
					<div className="goal-summary">
						<h3 className="goal-header">Viewing {GOALS.length} Total Goals</h3>
					</div>
					<div className="goals-filter">
						<input
							type="text"
							className="name-search"
							placeholder="Search goals by name"
							// value={this.state.searchTerm}
							onChange={e => this.handleSearch(e)}
						/>

						<CategoryList />

					</div>
				</section>

					{/* {(this.state.search === null) ? <TotalGoals /> : GOALS.goalName.toLowerCase().includes(this.state.search.toLowerCase())} */}
				<TotalGoals />
			</div>
		);
	}
}

export default Dashboard;
