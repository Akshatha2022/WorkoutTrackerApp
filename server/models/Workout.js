const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    default: 0,
  },
  reps: {
    type: Number,
    required: true,
  },
  distance: {
    type: Number,
    default: 0,
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);