import React from 'react';

class SignUpForm extends React.Component {
	render() {
		return (
			<form className='signup-form' onSubmit={this.handleSubmit}>
				<div className='form-container'>
					<div className='item'>
						<label htmlFor='first-name'>First name:</label>
						<input
							type='text'
							name='first-name'
							id='first-name'
							placeholder='First Name'
							required
						/>
					</div>
					<div className='item'>
						<label htmlFor='last-name'>Last name:</label>
						<input
							type='text'
							name='last-name'
							id='last-name'
							placeholder='Last Name'
							required
						/>
					</div>
					<div className='item'>
						<label htmlFor='username'>Email:</label>
						<input
							type='text'
							name='username'
							id='username'
							placeholder='example@abc.com'
							required
						/>
					</div>
					<div className='item'>
						<label htmlFor='password'>Password:</label>
						<input
							type='text'
							name='password'
							id='password'
							placeholder='type your password'
							required
						/>
					</div>
				</div>
				<button type='submit'>Sign Up</button>
			</form>
		);
	}
}

export default SignUpForm;
