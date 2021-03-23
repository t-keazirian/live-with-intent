import React from 'react';

const ApiContext = React.createContext({
	goals: [],
	deleteGoal: () => {},
	addGoal: () => {},
	updateGoal: () => {},
});

export default ApiContext;
