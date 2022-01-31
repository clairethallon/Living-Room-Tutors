const groupBmatchesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_GROUP_B_MATCHES":
      return action.payload;
    case "UNSET_GROUP_B_MATCHES":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default groupBmatchesReducer;
