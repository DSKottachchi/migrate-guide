import generateToken from "../utils/generateToken.js";
import User from "../models/user.js";

// @desc    Auth user/set token
// route    POST /api/users/auth
// access Public
const authUser = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password')
    }


  try {
    res.status(200).json({
      message: "Auth User",
    });
  } catch (err) {
    next(err); // error passed on to the error handling route
  }
};

// @desc    Register a new user
// route    POST /api/users
// access Public
const registerUser = async (req, res) => {
  try {
    console.log(req.body);

    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({ name, email, password });

    if(user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }
  } catch (err) {
    next(err); // error passed on to the error handling route
  }
};

// @desc    Logout user
// route    POST /api/users/logout
// access Public
const logoutUser = async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
  try {
    res.status(200).json({
      message: "User Logged out",
    });
  } catch (err) {
    next(err); // error passed on to the error handling route
  }
};

// @desc    Get user profile
// route    GET /api/users/profile
// access Private
const getUserProfile = async (req, res) => {
  try {
    res.status(200).json({
      message: "User Profile",
    });
  } catch (err) {
    next(err); // error passed on to the error handling route
  }
};

// @desc    Update user profile
// route    PUT /api/users/profile
// access Private
const updateUserProfile = async (req, res) => {
  try {
    res.status(200).json({
      message: "Update User Profile",
    });
  } catch (err) {
    next(err); // error passed on to the error handling route
  }
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
