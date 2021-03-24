import React from 'react';

const ApiContext = React.createContext({
	goals: [],
	deleteGoal: () => {},
	updateGoal: () => {},
	addGoal: () => {},
});

export default ApiContext;
