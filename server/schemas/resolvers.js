const { Workout } = require('../models');

const resolvers = {
  Query: {
    workout: async () => {
      return Tech.find({});
    }
  },
  Mutation: {
    createWorkout: async (parent, args) => {
      const workout = await Workout.create(args);
      return workout;
    },
    updateWorkout: async (parent, {_id, update}) => {
      const workout = await Workout.findOneAndUpdate(
        { _id },
        {workout: update}
      );
      return workout;
    },
    deleteWorkout: async (parent, args) => {
      const workout = await Workout.delete(args);
      return workout;
    }
  },
};

module.exports = resolvers;
