import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function TutorActivateDeactivateButton(props) {

  const dispatch = useDispatch();

  const deactiveTutor = () => {
    console.log(props.active.id);
    dispatch({ type: 'CHANGE_TUTOR_STATUS', payload: props.active.id });
  }
  return (
    <div>
      {props.active.active_tutor ? <Button onClick={deactiveTutor}>deactivate</Button> : <Button onClick={deactiveTutor}>activate</Button>}
    </div>
  );
}

export default TutorActivateDeactivateButton;
