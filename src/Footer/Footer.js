import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer-copyright'>
				<p className='footer-p'>Created by Taylor Keazirian</p>

				<a
					href='https://github.com/t-keazirian'
					target='_blank'
					rel='noreferrer'
					className='github-link'
				>
					<FontAwesomeIcon className='font-awesome' icon={faGithub} size='2x' />
				</a>
				<p className='footer-p'>
					Copyright <FontAwesomeIcon icon={faCopyright} /> 2021
				</p>
			</div>
		</div>
	);
}
