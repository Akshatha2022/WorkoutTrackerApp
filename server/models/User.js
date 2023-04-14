const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const { workout, workoutSchema } = require('./Workout');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    allowNull: false,
    // validate: {
    //   isEmail: true,
    // },
  },
  password: {
    type: String,
    required: true,
    allowNull: false,
  },
  firstName: {
    type: String,
    allowNull: false,
  },
  username: {
    type: String,
    allowNull: false,
  },
  workouts: [{
    type: mongoose.Schema.Types.ObjectID,
    ref: "Workout"
  }]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);