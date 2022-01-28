const tuteesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TUTEES":
      return action.payload;
    case "UNSET_TUTEES":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default tuteesReducer;
