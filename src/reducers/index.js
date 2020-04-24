
function reducer(state = [], action) {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        countries: action.payload,
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
