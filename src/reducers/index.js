
function reducer(state = [], action) {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        countries: action.payload,
        filtered: action.payload,
      };
    case 'SET_FILTERED':
      return {
        ...state,
        region: action.payload,
        filtered: state.countries.filter((country) => {
          return (country[0].region === action.payload && country[0].name.toUpperCase().includes(state.search.toUpperCase()));
        }),
      };
    case 'SEARCH_ITEM':
      console.log(action.payload);
      console.log(state.region);
      return {
        ...state,
        search: action.payload,
        filtered: state.countries.filter((country) => {
          ''.toUpperCase();
          return (country[0].name.toUpperCase().includes(action.payload.toUpperCase()) && country[0].region.includes(state.region));
        }),
      };
    case 'SET_THEME':
      return {
        ...state,
        dark: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
