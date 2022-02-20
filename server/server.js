const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const app = express();

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const testRouter = require("./routes/test.router");
const tuteesRouter = require("./routes/tutees.router");
const tutorsRouter = require("./routes/tutors.router");
const matchesRouter = require("./routes/matches.router");
// const mailRouter = require("./routes/mail.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//for nodemailer
app.use(cors());

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/test", testRouter);
app.use("/api/tutees", tuteesRouter);
app.use("/api/tutors", tutorsRouter);
app.use("/api/matches", matchesRouter);
// app.use("/api/mail", mailRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
