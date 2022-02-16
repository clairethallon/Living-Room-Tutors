import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import "../AdminNavBar/AdminNavBar.css";
import LRTHeader from "../../images/LRTHeader.png";
import tuteeIconBlue from "../../images/tuteeIconBlue.svg";
import tuteeIconWhite from "../../images/tuteeIconWhite.svg";
import tutorIconBlue from "../../images/tutorIconBlue.svg";
import tutorIconWhite from "../../images/tutorIconWhite.svg";
import recordsIconBlue from "../../images/recordsIconBlue.svg";
import recordsIconWhite from "../../images/recordsIconWhite.svg";

function AdminNavBar() {
  const user = useSelector((store) => store.user);

  return (
    <div className="AdminNav">
      <div className="LRTHeaderContainer">
        <Link to="/admin">
          <img src={LRTHeader} className="LRTHeader" />
        </Link>
      </div>

      {/* If no user is logged in, show these links */}
      {user.id === null && (
        // If there's no user, show login/registration links
        <Link className="navLink" to="/login">
          Login / Register
        </Link>
      )}

      {/* If a user is logged in, show these links */}
      {user.id && (
        <div className="adminNavContents">
          <div className="AdminNavLinks">
            <NavLink
              activeClassName="tuteeNavbarLink--active navbarlink--active"
              className="AdminNavLink tuteeNavLink"
              to="/admin"
            >
              <div className="topNavDiv"></div>
              <div className="middleDivBackground">
                <div className="middleNavDiv">
                  <div className="tuteeIcon"></div>
                  <span className="navTitleSpan">Tutees</span>
                </div>
              </div>
              <div className="bottomNavDiv"></div>
            </NavLink>

            <NavLink
              activeClassName="tutorNavbarLink--active navbarlink--active"
              className="AdminNavLink tutorNavLink"
              to="/tutors"
            >
              <div className="topNavDiv"> </div>
              <div className="middleDivBackground">
                <div className="middleNavDiv">
                  <div className="tutorIcon"></div>
                  <span className="navTitleSpan">Tutors</span>
                </div>
              </div>
              <div className="bottomNavDiv"></div>
            </NavLink>

            <NavLink
              activeClassName="recordsNavbarLink--active navbarlink--active"
              className="AdminNavLink"
              to="/records"
            >
              <div className="topNavDiv"> </div>
              <div className="middleDivBackground">
                <div className="middleNavDiv">
                  <div className="recordsIcon"></div>
                  <span className="navTitleSpan">Records</span>
                </div>
              </div>
              <div className="bottomNavDiv"></div>
            </NavLink>
          </div>
          <div className="logoutButton">
            <LogOutButton />
          </div>
        </div>
      )}

      {/* <Link className="navLink" to="/about">
          About
        </Link> */}
    </div>
  );
}

export default AdminNavBar;
