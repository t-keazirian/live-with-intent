import React from 'react';

class DeleteGoalBtn extends React.Component {

  handleClickDelete() {
    console.log('clicked');
  }

	render() {
		return (
			<button 
        className="delete-goal-btn" 
        type="submit"
        onClick={this.handleClickDelete}
        >
				Delete
			</button>
		);
	}
}

export default DeleteGoalBtn;
