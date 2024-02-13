import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10); //used bcrypt for salted password

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};

//signin
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "user not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong password"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); //creating token
    const { password: pass, ...rest } = validUser._doc; //removing the password from the validUser, so that passwors is removed when sending the object
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest); // sending the token via cookie in the browser
  } catch (error) {
    next(error);
  }
};
