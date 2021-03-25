const config = {
	API_BASE_URL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:8000/api'
			: 'https://agile-bastion-15649.herokuapp.com/api',
};

export default config;
