const express = require("express");
const userRouter = express.Router();

const User = require("../Models/Users.js");

const { addCategory, addUser } = require("../Controllers/userController.js");

userRouter.post("/addCategory", addCategory);
userRouter.post("/addUser", addUser);

module.exports = userRouter;
