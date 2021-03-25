import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import AddNewOTGoal from './AddNewGoal/AddNewGoal';
import Dashboard from './Dashboard/Dashboard';
import LandingPage from './LandingPage/LandingPage';
import NotFound from './NotFound/NotFound';
import UpdateGoal from './UpdateGoal/UpdateGoal';
import Goal from './Goal/Goal';
import ApiContext from './Context/ApiContext';
import GOALS from './store';
import config from './config';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			goals: [],
		};
	}

	componentDidMount() {
		fetch(config.API_BASE_URL, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(res => {
				if(!res.ok) {
					return res.json()
					.then(error => Promise.reject(error))
				}
				return res.json()
			})
			.then(goals => {
				this.setState({
					goals: goals
				})
				console.log(goals);
			})
		// this.setState({
		// 	goals: GOALS,
		// });
	}

	handleDeleteGoal = goalId => {
		const newArray = this.state.goals.filter(goal => goal.id !== goalId);
		this.setState({
			goals: newArray,
		});
	};

	handleEditGoal = updatedGoal => {
		const newGoalArray = this.state.goals.map(goal => {
			if (goal.id === updatedGoal.id) {
				goal.goalName = updatedGoal.goalName;
				goal.category = updatedGoal.category;
				goal.notes = updatedGoal.notes;
			}
			return goal;
		});
		this.setState({
			goals: newGoalArray,
		});
	};

	handleAddGoal = newGoal => {
		this.setState({
			goals: [...this.state.goals, newGoal],
		});
	};

	render() {
		const contextValue = {
			goals: this.state.goals,
			deleteGoal: this.handleDeleteGoal,
			updateGoal: this.handleEditGoal,
			addGoal: this.handleAddGoal,
		};

		return (
			<ApiContext.Provider value={contextValue}>
				<div className="app">
					<main className="main-app">
						<nav>
							<Nav />
						</nav>
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/add-new-goal" component={AddNewOTGoal} />
							<Route path="/edit-goal/:id" component={UpdateGoal} />
							<Route path="/goal/:id" component={Goal} />
							<Route component={NotFound} />
						</Switch>
					</main>
					<footer>
						<Footer />
					</footer>
				</div>
			</ApiContext.Provider>
		);
	}
}

export default App;
