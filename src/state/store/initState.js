const initState = {
  api: 'https://images-api.nasa.gov',
  fetching: false,
  fetchError: false,
  filteredMediaType: '',
  searchValue: { search: '', type: '' },
  response: [],
};

export default initState;
