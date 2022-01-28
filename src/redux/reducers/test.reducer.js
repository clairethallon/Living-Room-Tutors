const testReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_WIDGET":
      return action.payload;
    case "UNSET_WIDGET":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default testReducer;
