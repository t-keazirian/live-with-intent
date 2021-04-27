import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import TotalGoals from '../TotalGoals/TotalGoals';
import AddNewGoal from '../AddNewGoal/AddNewGoal';
import CategoryList from '../CategoryList/CategoryList';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import Nav from '../Nav/Nav';
import NotFound from '../NotFound/NotFound';

describe('App Test', () => {
	it('App renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<App />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Dashboard', () => {
	it('Dashboard renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<Dashboard />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Total Goals', () => {
	it('Total Goals renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<TotalGoals />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Add New Goal', () => {
	it('Add New Goal renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<AddNewGoal />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Category List', () => {
	it('Category List renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<CategoryList />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Footer', () => {
	it('Footer renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Landing Page', () => {
	it('Landing Page renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<LandingPage />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Nav', () => {
	it('Nav renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<Nav />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Not found', () => {
	it('Not found renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<NotFound />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
