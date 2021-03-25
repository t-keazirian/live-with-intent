const config = {
	API_BASE_URL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:8000'
			: 'https://agile-bastion-15649.herokuapp.com/',
};

export default config;
