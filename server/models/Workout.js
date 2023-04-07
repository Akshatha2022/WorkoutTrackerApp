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

module.exports = mongoose.model("Workout", workoutSchema);