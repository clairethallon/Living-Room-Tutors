const activeTutorsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TUTORS":
      return action.payload;
    case "UNSET_ACTIVE_TUTORS":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default activeTutorsReducer;
