import { useSelector } from "react-redux";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import RecordsTable from "../RecordsTable/RecordsTable";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "../RecordsPage/RecordsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import calenderIcon from "../../images/calenderIcon.svg";

function RecordsPage(props) {
  const [yearSelected, setYearSelected] = useState("");
  const matches = useSelector((store) => store.matches);

  const calendar = <FontAwesomeIcon icon={faCalendarAlt} />;

  const changeYear = () => {
    console.log(event.target.value);
    setYearSelected(event.target.value);
    const timeStampArray = [];
    const numYearMatches = 0;
    for (let i = 0; i < matches.length; i++) {
      let matchYear = {
        year: ""
      };
      for (let j = 0; j < 4; j++) {
        matchYear.year += matches[i].match_timestamp[j];
      }
      timeStampArray.push(matchYear);
      console.log(timeStampArray);
    }
    for (let i = 0; i < timeStampArray.length; i++) {
      if (timeStampArray[i].year == event.target.value) {
        numYearMatches + 1;
      }
    }
    console.log("EYEYEY", numYearMatches);


  };

  return (
    <div className="adminPageContainer">
      <AdminNavBar />
      <h1>Matched Tutors & Tutees</h1>
      <label htmlFor="yearFilter">
        <img alt="calender" className="calenderIcon" src={calenderIcon} />{" "}
        Filter Matches by Year
      </label>
      {/* {JSON.stringify(yearSelected)} */}
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
