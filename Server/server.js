const userRoutes = require("./controllers/users.js");
const habitRoutes = require("./controllers/habits.js");

const express = require("express");
const server = express();
const cors = require("cors");
// const corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200,
// };
// server.use(cors(corsOptions));

server.use(cors());

//apply middleware to incoming requests
server.use(express.json());

const passport = require("passport");
server.use(passport.initialize());
require("./config/passport")(passport);

const port = 3000;

server.use("/users", userRoutes);
server.use("/habits", habitRoutes);

server.listen(port, () =>
  console.log(`Habithub server online at port ${port}`)
);

server.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Habit Hub" });
});
