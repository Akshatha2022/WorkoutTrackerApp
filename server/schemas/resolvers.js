const { AuthenticationError } = require('apollo-server-express');
const { Workout } = require('../models');
const {User} = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('workouts');
    },
    user: async (parent, args, context) => {
      return await User.findOne({ _id: context.user._id}).populate('workouts');
    },

    workouts: async () => {
      return await Workout.find({});
    },
    workout: async (parent, args) => {
      return await Workout.findOne({_id: args._id});
    }
  },
  Mutation: {
    addUser: async (parent, { email, password , firstName, username}) => {
      const user = await User.create({ username, email, password, firstName });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    createWorkout: async (parent, args, context) => {
       const newWorkout = await Workout.create({
        title: args.title,
        time: args.time,
        reps: args.reps,
        distance: args.distance
      })
      
       // const userID = localStorage.getItem("id_token");
       console.log(context.user);
        await User.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: {workouts: newWorkout}},
          {new: true}
        );
          return newWorkout;
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
