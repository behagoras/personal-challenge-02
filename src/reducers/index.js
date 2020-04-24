
const filterState = (original, filters) => original.filter((offer) => filters.filter((filter) => offer.filtrable.includes(filter)).length === filters.length);
function reducer(state = [], action) {
  let filters;
  switch (action.type) {

    case 'SET_STATE':
      // console.log('action.payload', action.payload);
      console.log('state', state);
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
