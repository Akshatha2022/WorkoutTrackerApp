const { Workout } = require('../models');

const resolvers = {
  Query: {
    workouts: async () => {
      return Workout.find({});
    },
    workout: async (parent, args) => {
      return await Workout.findOne({_id: args._id});
    }
  },
  Mutation: {
    createWorkout: async (parent, args) => {
      const workout = await Workout.create({
        title: args.title,
        time: args.time,
        reps: args.reps,
        distance: args.distance
      });
      return workout;
    },
    updateWorkout: async (parent, {_id, title, time, reps, distance}) => {
      const workout = await Workout.findOneAndUpdate(
        { _id: _id },
        {$set:{title,time,reps,distance}},
        {new: true}
      );
      return workout;
    },
    deleteWorkout: async (parent, args) => {
      const workout = await Workout.findOneAndDelete({_id: args._id});
      return workout;
    }
  },
};

module.exports = resolvers;
