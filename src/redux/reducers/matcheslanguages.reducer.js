const matchesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MATCH_LANG":
      return action.payload;
    case "UNSET_MATCH_LANG":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default matchesReducer;
