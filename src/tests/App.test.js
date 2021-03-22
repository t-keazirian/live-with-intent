import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('App Tests', () => {
	it('renders without crashing', () => {
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

describe('Dashboard snapshot', () => {
	it('renders the UI as expected', () => {
		const tree = renderer.create(
    <BrowserRouter>
    <Dashboard />
    </BrowserRouter>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
