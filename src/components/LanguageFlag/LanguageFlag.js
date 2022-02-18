import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name LanguageFlag with the name for the new component.
function LanguageFlag(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  const flagIcon = <FontAwesomeIcon icon={faStar} />;

  return <div className="flag languageFlag">{flagIcon}</div>;
}

export default LanguageFlag;
