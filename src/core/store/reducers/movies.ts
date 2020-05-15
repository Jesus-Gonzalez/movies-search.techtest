const initialState = {
  inputSearch: '',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      debugger;
      return Object.assign(
        state,
        { title: action.movie }
      );

    case 'FETCH_MOVIES_ERROR':
      return Object.assign(
        state,
        { title: 'ERROR! :(' }
      );

    default:
      return state;
  }
}
