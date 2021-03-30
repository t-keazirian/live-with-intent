import React from 'react';

class CategoryList extends React.Component {
	render() {
		return (
			<div className='goal-category'>
				<select name='goal-category' id='goal-category' defaultValue=''>
					<option value=''>
						Choose Category
					</option>
					<option value='get-fit'>Get Fit</option>
					<option value='nutrition'>Nutrition</option>
					<option value='personal-growth'>Personal Growth</option>
					<option value='health'>Health</option>
					<option value='learn-skill'>Learn A Skill</option>
					<option value='be-productive'>Be Productive</option>
					<option value='mindfulness'>Mindfulness</option>
					<option value='sleep'>Sleep</option>
				</select>
			
			</div>
		);
	}
}

export default CategoryList;
