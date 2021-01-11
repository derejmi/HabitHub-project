const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
//apply middleware to incoming requests
server.use(express.json());

const port = 3000;

const userRoutes = require("./controllers/users.js");
const habitRoutes = require("./controllers/habits.js");

server.use("/users", userRoutes);
server.use("/habits", habitRoutes);

server.listen(port, () =>
  console.log(`Habithub server online at port ${port}`)
);

server.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Habit Hub" });
});
