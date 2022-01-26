const deactiveTuteesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_DEACTIVE_TUTEES":
      return action.payload;
    case "UNSET_DEACTIVE_TUTEES":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default deactiveTuteesReducer;
