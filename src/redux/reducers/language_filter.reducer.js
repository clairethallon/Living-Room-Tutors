const languageFilterReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_LANGUAGE_FILTER":
      return action.payload;
    case "UNSET_LANGUAGE_FILTER":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default languageFilterReducer;
