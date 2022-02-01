import React, { useState } from 'react';
import {useSelector} from 'react-redux';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentModal with the name for the new component.
function StudentModal(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('MODAL');

  return (
    <div>

      <div classname="modal">
        <h2>{heading}</h2>
        <div>
          <h3> Thank you for your Submission. </h3>
          <button>Done</button>
        </div>
      </div>
      
    </div>
  );
}

export default StudentModal;
