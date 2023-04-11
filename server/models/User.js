const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;
<<<<<<< HEAD
=======
const {workout} = require('./Workout');
>>>>>>> 1edc259668e4104c93bf68236475103202ed6be0

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
=======
  workouts: [workout]
>>>>>>> 1edc259668e4104c93bf68236475103202ed6be0
});

// login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please enter an email and password");
  }
  // find the user by email, const user is the result of the query
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("User not found");
  }
  // if user is found, check if password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error("Incorrect password");
  }
  // if password is correct, return user
  return user;
};

// signup method
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill out all fields");
  }
  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email");
  }
  // check if user already exists
  const userExists = await this.findOne({ email });
  if (userExists) {
    throw Error("User already exists");
  }

  // hash password, generate salt
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create new user
  const user = await this.create({ email, password: hash });
  localStorage.setItem("WorkoutUserID",user._id);
  // return user if successful
  return user;
};

module.exports = mongoose.model("User", userSchema);