import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs, Container } from "react-bootstrap";

import AdminNavBar from "../AdminNavBar/AdminNavBar";
import PendingTutors from "../PendingTutors/PendingTutors";
import DeactivatedTutors from "../DeactivatedTutors/DeactivatedTutors";
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorsPage   with the name for the new component.
function TutorsPage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Tutors Page");

  return (
    <div className="adminPageContainer">
      <AdminNavBar />
      <Tabs
        defaultActiveKey="Pending-Tutors"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Pending-Tutors" title="Pending Tutors">
          <PendingTutors />
        </Tab>
        <Tab eventKey="Deactivated-Tutors" title="Deactivated Tutors">
          <DeactivatedTutors />
        </Tab>
      </Tabs>
    </div>
  );
}

export default TutorsPage;
