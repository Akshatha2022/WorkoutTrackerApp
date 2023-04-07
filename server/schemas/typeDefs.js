const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Workout {
    _id: ID!
    title: String!
    time: Int
    reps: Int!
    distance: Int
  }

  type Query {
    workouts: [Workout]
    workout(_id: ID!): Workout
  }

  type Mutation {
    createWorkout(title: String!): Workout
    updateWorkout(_id: Int!, update: String!): Workout
    deleteWorkout(_id: Int!): Workout
  }
`;

module.exports = typeDefs;
