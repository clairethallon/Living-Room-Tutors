import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name Test with the name for the new component.
function Test(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("FETCH_WIDGET");
  const testReducer = useSelector((store) => store.testReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_WIDGET" });
  }, []);

  return (
    <div>
      <h2>{JSON.stringify(store)}</h2>
      <h2>{JSON.stringify(testReducer)}</h2>
    </div>
  );
}

export default Test;
