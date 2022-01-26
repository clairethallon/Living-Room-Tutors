import React, { useEffect } from "react";
import {
  HashRouter as Router,
  matchPath,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Test from "../Test/Test";

import StudentAdditional from "../StudentAdditional/StudentAdditional";
import StudentInfo from "../StudentInfo/StudentInfo";
import StudentSubjects from "../StudentSubjects/StudentSubjects";
import StudentTerms from "../StudentTerms/StudentTerms";

import TutorInfo from "../TutorInfo/TutorInfo";
import TutorSubjects from "../TutorSubjects/TutorSubjects";
import TutorTerms from "../TutorTerms/TutorTerms";

import "./App.css";
import TuteesPage from "../TuteesPage/TuteesPage";
import TutorsPage from "../TutorsPage/TutorsPage";
import RecordsPage from "../RecordsPage /RecordsPage";
import MatchPage from "../MatchPage/MatchPage";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        {/* nav bar needs to be moved to the individual components that have to do with a normal (non-admin) user */}
        {/* <Nav /> */}
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Unprotected Routes */}
          <Route
            // shows AboutPage at all times (logged in or not)

            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route exact path="/StudentAdditional">
            <StudentAdditional />
          </Route>

          <Route exact path="/StudentInfo">
            <StudentInfo />
          </Route>

          <Route exact path="/StudentSubjects">
            <StudentSubjects />
          </Route>

          <Route exact path="/StudentTerms">
            <StudentTerms />
          </Route>

          <Route exact path="/TutorAdditional">
            <TutorAdditional />
          </Route>

          <Route exact path="/TutorInfo">
            <TutorInfo />
          </Route>

          <Route exact path="/TutorSubjects">
            <TutorSubjects />
          </Route>

          <Route exact path="/TutorTerms">
            <TutorTerms />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <Route
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </Route>

          <Route
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </Route>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/admin"
          >
            <TuteesPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/tutors"
          >
            <TutorsPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/records"
          >
            <RecordsPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/match"
          >
            <MatchPage />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/admin" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/admin" />
            ) : (
              // Otherwise, show the registration page
              <TuteesPage />
            )}
          </Route>

          {/* THIS IS JUST A TEST */}
          <Route exact path="/test">
            <Test />
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
