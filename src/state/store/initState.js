const initState = {
  api:
    process.env.NODE_ENV === 'production'
      ? 'http://nasa-fe.s3-website.eu-west-2.amazonaws.com/api/response.json'
      : 'https://images-api.nasa.gov',
  isLoading: true,
  searchValue: '',
  response: [],
};

export default initState;
