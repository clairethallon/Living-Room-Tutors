import { useSelector } from "react-redux";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import RecordsTable from "../RecordsTable/RecordsTable";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "../RecordsPage/RecordsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function RecordsPage(props) {
  const [yearSelected, setYearSelected] = useState("");

  const calendar = <FontAwesomeIcon icon={faCalendarAlt} />;

  const changeYear = () => {
    console.log(event.target.value);
    setYearSelected(event.target.value);
  };

  return (
    <div className="adminPageContainer">
      <AdminNavBar />
      <h2>Matched Tutors & Tutees</h2>
      <label htmlFor="yearFilter">{calendar} Filter Matches by Year</label>

      <Form.Select
        id="yearFilter"
        className="filterByYearDropdown"
        aria-label="Default select example"
        onChange={(event) => changeYear(event)}
      >
        <option value="all"> View All</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </Form.Select>
      <RecordsTable year={yearSelected} />
    </div>
  );
}

export default RecordsPage;
