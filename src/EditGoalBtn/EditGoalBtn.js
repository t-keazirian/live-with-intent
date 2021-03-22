import React from 'react';

class EditGoalBtn extends React.Component {

  handleClickEdit() {
    console.log('clicked');
  }

  render() {
    return (
      <button 
      type="submit"
      onClick={this.handleClickEdit}
      >
      Edit
      </button>
    )
  }
}

export default EditGoalBtn;