const express = require("express");
require("express-async-errors");
const cors = require("cors");
const morgan = require("morgan");

const { auth } = require("./middlewares/auth");
const { errorHandler } = require("./middlewares/errorHandler");
const dashboardRoutes = require("./routes/dashboard");
const userRoutes = require("./routes/user");

const app = express();

app.use(
  cors({
    origin: process.env.APP_URL,
  })
);
app.use(express.json());

app.use(
  morgan("tiny")
  //morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/api/dashboards", dashboardRoutes);
app.use("/api/user", userRoutes);

app.get("/api/public", (req, res) => {
  console.log("public");
  res.send("Hello Public World ! ");
});
app.get("/api/private", auth({ block: true }), (req, res) => {
  console.log("private");
  res.send(`Hello Private world, your user id is: ${res.locals.user.userId} !`);
});
app.get("/api/prublic", auth({ block: false }), (req, res) => {
  console.log("private");
  if (!res.locals.userId)
    return res.send("Hello Prublic World, you're not logged in ! ");
  res.send(`Hello Prublic World, your user id is: ${res.locals.user.userId} !`);
});

app.use(errorHandler);

module.exports = app;
