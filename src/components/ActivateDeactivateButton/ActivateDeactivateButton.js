import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function ActivateDeactivateButton(props) {
  return (
    <div>
      <div>{JSON.stringify(props)}</div>
      {props.active ? <Button>deactivate</Button> : <Button>activate</Button>}
    </div>
  );
}

export default ActivateDeactivateButton;
