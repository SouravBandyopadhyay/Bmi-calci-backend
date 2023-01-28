const express = require("express");
const mongoose = require("mongoose");
const User = require("./Schema/userSchema");
const cors = require("cors");
const connect = require("./Connect");
const userRouter = require("./Contoller/user.router");
const PORT = 8080;
mongoose.set("strictQuery", true);
const server = express();
server.use(express.json());
server.use(cors());

server.get("/", async (req, res) => {
  res.status(200).send("Welcome Sourav to your Server");
});
server.use("/user", userRouter);
server.post("/", async (req, res) => {
  const user = req.body;
  console.log(user);
  const data = await User.create(user);
  res.status(200).send({ message: "User Created Successfully", data: data });
});
server.listen(PORT, async () => {
  await connect();
  console.log(`Server FiredUp at ${PORT}`);
});
