import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

//this can be managed with a ternary operator to show either the "activate" or "deactivate" buttons

function ActivateDeactivateButton(props) {
  const store = useSelector((store) => store);
  //the active status will come from the store rather than from the usestate hook below.
  //the active useState hook is only temporary so that "active" can be defined and not give an error
  const [active, setActive] = useState(true);

  const deactivate = () => {
    console.log("deactivate button clicked");
  };

  return (
    <div onClick={deactivate}>
      {active ? (
        <Button className="activationButton">deactivate</Button>
      ) : (
        <Button className="activationButton">activate</Button>
      )}
    </div>
  );
}

export default ActivateDeactivateButton;
