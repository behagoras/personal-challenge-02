
const filterState = (original, filters) => original.filter((offer) => filters.filter((filter) => offer.filtrable.includes(filter)).length === filters.length);
function reducer(state = [], action) {
  let filters;
  switch (action.type) {
    case 'FILTER':
      return {
        ...state,
        filtered: filterState(state.original, action.filters),
        filters: action.filters,
      };
    case 'SET_STATE':
      // console.log('action.payload', action.payload);
      return action.payload;
    case 'ADD_FILTER':
      filters = state.filters.filter((filter) => action.filter !== filter);
      filters.push(action.filter);
      console.log(filters);
      return {
        ...state,
        filters,
        filtered: filterState(state.original, filters),
      };
    case 'REMOVE_FILTER':
      filters = state.filters.filter((filter) => action.filter !== filter);
      console.log(filters);
      return {
        ...state,
        filters,
        filtered: filterState(state.original, filters),
      };
    default:
      return state;
  }
}

export default reducer;
