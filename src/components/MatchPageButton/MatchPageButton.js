import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MatchButton with the name for the new component.
function MatchPageButton(props) {
  const history = useHistory();

  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  const navigateToMatchPage = () => {
    history.push("/match");
  };

  return (
    <div>
      <Button onClick={navigateToMatchPage}>Match</Button>
    </div>
  );
}

export default MatchPageButton;
