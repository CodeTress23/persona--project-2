require("dotenv").config();
require("./config/connection");
require("./config/authStrategy");

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const passport = require("passport");
const cors = require("cors");

const session = require("express-session");

const quizRoutes = require("./routes/quizRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public")));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (request, response, next) => {
  //response.status(200).json({success: {message: "This route points to the Home page"}, statusCode: 200});
  //Add response.send with the template literal
  response.send(
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Test</title>
        </head>

        <body>
            <h1>Test for Deployment</h1>
            <p>Are you able to see this?</p>
        </body>
    </html>
    `
  )
});

// app.get("/", (req, res, next) => {res.json("test route success")})
// res.send (
//   `
//    {<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>HTML 5 Boilerplate</title>
//     </head>
//     <body>
//     <h1>test<h1>
//     </body>
//     </html>
//   `
  
// ) => {



app.listen(PORT);
console.log(`The server is listening on port ${PORT}`);