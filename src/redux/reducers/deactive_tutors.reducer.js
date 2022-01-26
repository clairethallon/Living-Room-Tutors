const deactiveTutorsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_DEACTIVE_TUTORS":
      return action.payload;
    case "UNSET_DEACTIVE_TUTORS":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default deactiveTutorsReducer;
