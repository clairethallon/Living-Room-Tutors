const selected_tuteeReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SELECTED_TUTEE":
      return action.payload;
    case "UNSET_SELECTED_TUTEE":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default selected_tuteeReducer;
