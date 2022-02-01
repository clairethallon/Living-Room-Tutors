import React, { useState, useEffect } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  // CHANGES MADE BY CLT BELOW TO TEST THE REDUCERS
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_TUTORS" });
    dispatch({ type: "FETCH_TUTEES" });
    dispatch({ type: "FETCH_MATCHES" });
    dispatch({ type: "FETCH_ACTIVE_TUTORS" });
    dispatch({ type: "FETCH_DEACTIVE_TUTORS" });
    dispatch({ type: "FETCH_ACTIVE_TUTEES" });
    dispatch({ type: "FETCH_DEACTIVE_TUTEES" });
  }, []);

  const tutors = useSelector((store) => store.tutors);
  const tutees = useSelector((store) => store.tutees);
  const matches = useSelector((store) => store.matches);
  const activeTutors = useSelector((store) => store.activeTutors);
  const deactiveTutors = useSelector((store) => store.deactiveTutors);
  const activeTutees = useSelector((store) => store.activeTutees);
  const deactiveTutees = useSelector((store) => store.deactiveTutees);

  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.first_name}!</h2>
      <p>Your ID is: {user.id}</p>

      {/* CHANGES MADE BELOW BY CLT TO TEST THE REDUCERS */}

      <p>active tutors: {JSON.stringify(activeTutors)}</p>
      <p>deactive tutors: {JSON.stringify(deactiveTutors)}</p>
      <p>active tutees: {JSON.stringify(activeTutees)}</p>
      <p>deactive tutees: {JSON.stringify(deactiveTutees)}</p>

      <p>matches {JSON.stringify(matches)}</p>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
