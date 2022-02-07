import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function TuteeActivateDeactivateButton(props) {
  const dispatch = useDispatch();

  const deactiveTutee = () => {
    console.log(props.active.id);
    dispatch({ type: "CHANGE_TUTEE_STATUS", payload: props.active.id });
  };

  return (
    <div>
      {props.active.active_tutee ? (
        <Button className="secondaryButton" onClick={deactiveTutee}>
          deactivate
        </Button>
      ) : (
        <Button className="secondaryButton" onClick={deactiveTutee}>
          activate
        </Button>
      )}
    </div>
  );
}

export default TuteeActivateDeactivateButton;
