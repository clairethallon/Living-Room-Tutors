import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function TutorActivateDeactivateButton(props) {
  return (
    <div>
      <div>{JSON.stringify(props)}</div>
      {props.active ? <Button>deactivate</Button> : <Button>activate</Button>}
    </div>
  );
}

export default TutorActivateDeactivateButton;
