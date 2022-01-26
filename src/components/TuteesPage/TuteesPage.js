import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import { Tab, Tabs, Container } from "react-bootstrap";
import PendingTutees from "../PendingTutees/PendingTutees";
import DeactivatedTutees from "../DeactivatedTutees/DeactivatedTutees";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TuteesPage   with the name for the new component.
function TuteesPage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Tutees Page");

  return (
    <div className="adminPageContainer">
      <AdminNavBar />

      <Tabs
        defaultActiveKey="Pending-Tutees"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Pending-Tutees" title="Pending Tutees">
          <PendingTutees />
        </Tab>
        <Tab eventKey="Deactivated-Tutees" title="Deactivated Tutees">
          <DeactivatedTutees />
        </Tab>
      </Tabs>
    </div>
  );
}

export default TuteesPage;
