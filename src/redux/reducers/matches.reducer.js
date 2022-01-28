const matchesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MATCHES":
      return action.payload;
    case "UNSET_MATCHES":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default matchesReducer;
