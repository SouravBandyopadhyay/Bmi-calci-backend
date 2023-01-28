const express = require("express");
const User = require("../Schema/userSchema");
const userRouter = express.Router();

// POST: http://localhost:8080/user/login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const find_user = await User.findOne({ email, password });
    if (!find_user) {
      return res.status(401).send("Invalid Details");
    }
    return res.send({
      token: `${find_user.id}`,
    });
  } catch (err) {
    return res.status(401).send(err.message);
  }
});

// POST : http://localhost:8080/user/register
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let find_user = await User.findOne({ email });
    if (find_user) {
      return res
        .status(401)
        .send("Email is already exist try using different email");
    }
    const newUser = await User.create(req.body);
    res.send({
      token: `${newUser.id}`,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send("Internal server Error");
  }
});

module.exports = userRouter;
