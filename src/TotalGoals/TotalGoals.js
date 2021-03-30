import React from 'react';
import './totalgoals.css';
import IndvGoal from '../IndvGoal/IndvGoal';
import ApiContext from '../Context/ApiContext';

class TotalGoals extends React.Component {
	static contextType = ApiContext;

	render() {
		return (
			<div className='total-goals'>
				<div className='goals-container'>
					<div className='goals-list'>
						<ul>
							{this.context.goals.map(goal => (
								<IndvGoal goal={goal} key={goal.id}/>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default TotalGoals;
