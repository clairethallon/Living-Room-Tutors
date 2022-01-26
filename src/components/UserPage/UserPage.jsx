import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM


  // CHANGES MADE BY CLT BELOW TO TEST THE REDUCERS
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_TUTORS' });
  //   dispatch({ type: 'FETCH_TUTEES' });
  //   dispatch({ type: 'FETCH_MATCHES' });
  // }, []);

  // const tutors = useSelector((store) => store.tutors);
  // const tutees = useSelector((store) => store.tutees);
  // const matches = useSelector((store) => store.matches);

  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      {/* CHANGES MADE BELOW BY CLT TO TEST THE REDUCERS */}
      {/* 
      <p>{JSON.stringify(tutors)}</p>
      <p>{JSON.stringify(tutees)}</p>
      <p>{JSON.stringify(matches)}</p> */}

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
