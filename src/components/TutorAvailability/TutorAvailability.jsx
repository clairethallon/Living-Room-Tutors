import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorAvailability with the name for the new component.
function TutorAvailability(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Availability');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default TutorAvailability;
