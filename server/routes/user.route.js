const express = require('express');
const userRouter = express.Router();
const { register, login, resetPassword,forgotPassword } = require("../controller/user.controller")

// Registeration API
userRouter.post('/api/register',register);

//Login API 
userRouter.post('/api/login',login);

//Password Reset API 
userRouter.post('/api/reset',resetPassword);


//Forgot Password API 
userRouter.post('/api/forgotPassword',forgotPassword);

module.exports = userRouter

