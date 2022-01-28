const activeTuteesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ACTIVE_TUTEES":
      return action.payload;
    case "UNSET_ACTIVE_TUTEES":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default activeTuteesReducer;
