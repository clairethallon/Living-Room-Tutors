import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

//this can be managed with a ternary operator to show either the "activate" or "deactivate" buttons

function ActivateDeactivateButton(props) {
  const store = useSelector((store) => store);
  //the active status will come from the store rather than from the usestate hook below.
  //the active useState hook is only temporary so that "active" can be defined and not give an error
  const [active, setActive] = useState(true);
  return (
    <div>
      {active ? <Button>deactivate</Button> : <Button>activate</Button>}
    </div>
  );
}

export default ActivateDeactivateButton;
