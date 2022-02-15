import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MatchButton with the name for the new component.
function MatchPageButton(props) {
  const history = useHistory();

  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  const dispatch = useDispatch();

  const navigateToMatchPage = async () => {
    await dispatch({ type: "FETCH_POSSIBLE_MATCHES", payload: props.tutee });
    await history.push(`/match`);
  };

  return (
    <div>
      {/* {JSON.stringify(props)} */}
      {props.tutee.active_tutee ? (
        <Button
          className="primaryButton matchButton"
          onClick={navigateToMatchPage}
        >
          Match
        </Button>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default MatchPageButton;
