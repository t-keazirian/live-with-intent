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

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			goals: [],
		};
	}

	componentDidMount() {
		this.setState({
			goals: GOALS,
		});
	}

	handleDeleteGoal = goalId => {
		const newArray = this.state.goals.filter(goal => goal.id !== goalId);
		this.setState({
			goals: newArray,
		});
		console.log(newArray);
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

	render() {
		const contextValue = {
			goals: this.state.goals,
			deleteGoal: this.handleDeleteGoal,
			updateGoal: this.handleEditGoal,
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
