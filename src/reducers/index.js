
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
        filters: [{ region: action.payload }],
        filtered: state.countries.filter((country) => {
          console.log(country);
          console.log(action.payload);
          return country[0].region === action.payload;
        }),
      };
    case 'SEARCH_ITEM':
      console.log(action.payload);
      console.log(state.filters);
      return {
        ...state,
        search: action.payload,
        filtered: state.countries.filter((country) => {
          ''.toUpperCase();
          return (country[0].name.toUpperCase().includes(action.payload.toUpperCase()));
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
