import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function TuteeActivateDeactivateButton(props) {

  const dispatch = useDispatch();


  const deactiveTutee = () => {
    console.log(props.active.id);
    dispatch({ type: 'CHANGE_TUTEE_STATUS', payload: props.active.id });


  }

  return (
    <div>
      <div>{JSON.stringify(props)}</div>
      <div>{JSON.stringify(props.active)}</div>

      {props.active.active_tutee ? <Button onClick={deactiveTutee}>deactivate</Button> : <Button onClick={deactiveTutee}>activate</Button>}
    </div>
  );
}

export default TuteeActivateDeactivateButton;
