const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Workout {
    _id: ID!
    title: String!
    time: Int
    reps: Int
    distance: Int
  }

  type Query {
    workouts: [Workout]
    workout(_id: ID!): Workout
  }

  type Mutation {
    createWorkout(title: String!, time: Int, reps: Int, distance: Int): Workout
    updateWorkout(_id: String!, title: String, time: Int, reps: Int, distance: Int): Workout
    deleteWorkout(_id: String!): Workout
  }
`;

module.exports = typeDefs;
