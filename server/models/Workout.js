const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  distance: {
    type: Number
  },
},
{ timestamps: true }
);

const workout = mongoose.model("Workout", workoutSchema);
module.exports = {workout, workoutSchema};