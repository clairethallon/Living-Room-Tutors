import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Logo from "../../images/Logo.png";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name Header with the name for the new component.
function Header(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Living Room Tutors K-12 Registration Form');

  return (
    <div>
      <div>
        <img  style={{'max-width': '100px'}} src={Logo}/>
      </div>

      <div>
        <h2>{heading}</h2>
      </div>
    </div>
  );
}

export default Header;
