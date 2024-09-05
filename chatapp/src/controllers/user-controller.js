const Emp = require("../models/user-models");

const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create a new user
    const newUser = new Emp({
      empName: name,
      empEmail: email,
      empPassword: password,
    });

    const insertedUser = await newUser.save();
    const user = insertedUser?._doc;
    delete user?.empPassword;
    res.status(201).json({
      message: "User signed up successfully",
      user: {
        ...user,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error signing up user", error });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return { message: "email and password are required!" };
    }
    const existingUser = await Emp.findOne({ email }, { password: 1 });
    const dbPassword = existingUser?.password;
    if (dbPassword == password) {
      res.status(200).json({
        message: "Login Succesfull!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  userSignUp,
  userLogin,
};