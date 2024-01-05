const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(6);
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  try {
    const { email, password } = req.body;
    if (email == "" || password == "") {
      res.status(400).json({
        message: "Please fill all the fields",
      });
    }

    //Checking email format
    if (!email.match(emailRegex)) {
      return res.status(400).json({
        message: "Email format is wrong",
      });
    }

    //checking if user exists
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User Already Exists",
        user,
      });
    }
    //if not registered Adding user to db
    const registeredUser = await userModel.create({
      email: email,
      password: bcrypt.hashSync(password, salt),
    });

    //generting new token
    const token = jwt.sign({ user: registeredUser }, process.env.SCRETE_KEY, {
      expiresIn: "2h",
    });
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      user: registeredUser,
      token,
    });
  } catch (error) {
    console.log(`Something Wrong in registerartion ${error}`);
    res.status(500).json({
      message: `Something Wrong in registerartion ${error.message}`,
    });
  }
};

const login = async (req, res) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  try {
    const { email, password } = req.body;

    if (email == "" || password == "") {
      res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    //Checking email format
    if (!email.match(emailRegex)) {
      return res.status(400).json({
        message: "Email format is wrong",
      });
    }
    //checking if user exisits
    const isUser = await userModel.find({ email });
    if (isUser.length == 0) {
      return res.status(400).json({
        message: "User dose not exist,Please register",
      });
    }
//Comparing password and generating Token
    if (isUser.length > 0 && isUser[0].password) {
      if (await bcrypt.compare(password, isUser[0].password)) {
        const token = jwt.sign({ user: isUser }, process.env.SCRETE_KEY, {
          expiresIn: "10h",
        });
        res.status(200).json({
          message: "Login Successfull",
          user: isUser,
          token,
        });
      }
    } else {
      return res.status(400).json({
        message: "Password is incorect",
      });
    }
  } catch (error) {
    console.log(`Something Wrong in login ${error}`);
    res.status(500).json({
      message: `Something Wrong in login ${error.message}`,
    });
  }
};

const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
    try {
      const user = await userModel.find({email});
  
      if (user.length==0) {
        return res.status(400).json({ message: 'User dose not exists' });
      }
  
      // Set the new password and clear the reset token
      user[0].password = bcrypt.hashSync(newPassword, salt);
      const token = jwt.sign({ user: user }, process.env.SCRETE_KEY, {
        expiresIn: "10h",
      });
      await user.save();
  
      res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      console.log(`Something went wrong in password reset: ${error}`);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
module.exports = { register, login, resetPassword };
