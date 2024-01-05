const express = require('express');
const userRouter = express.Router();
const { register, login, resetPassword } = require("../controller/user.controller")

// Registeration API
userRouter.post('/api/register',register);

//Login API 
userRouter.post('/api/login',login);

//Password Reset API 
userRouter.post('/api/reset',resetPassword);

module.exports = userRouter

