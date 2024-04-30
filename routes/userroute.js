const express = require('express');
const userController = require('../controllers/UserController');

const userRouter = express.Router();

userRouter.post("/insertUser", userController.insertUser);
userRouter.post("/checkUserLogin", userController.checkUserLogin);
userRouter.post("/insertContact", userController.insertContact); // Add this line for insertcontact

module.exports = userRouter;
