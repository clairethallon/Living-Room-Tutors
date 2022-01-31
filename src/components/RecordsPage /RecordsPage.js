import { useSelector } from "react-redux";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import RecordsTable from "../RecordsTable/RecordsTable";
import { useEffect, useState } from "react";

function RecordsPage(props) {
  return (
    <div className="adminPageContainer">
      <AdminNavBar />
      <h2>Matched Tutors & Tutees</h2>
      <RecordsTable />
    </div>
  );
}

export default RecordsPage;
