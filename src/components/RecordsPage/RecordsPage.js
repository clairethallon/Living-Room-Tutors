import { useSelector } from "react-redux";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import RecordsTable from "../RecordsTable/RecordsTable";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "../RecordsPage/RecordsPage.css";

function RecordsPage(props) {
  return (
    <div className="adminPageContainer">
      <AdminNavBar />
      <h2>Matched Tutors & Tutees</h2>
      <Form.Select
        className="filterByYearDropdown"
        aria-label="Default select example"
      >
        <option>Filter by year</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <RecordsTable />
    </div>
  );
}

export default RecordsPage;
