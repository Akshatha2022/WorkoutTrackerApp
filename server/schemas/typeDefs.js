const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Workout {
    _id: ID!
    name: String!
  }

  type Query {
    workout: [Workout]
  }

  type Mutation {
    createWorkout(workout: String!): Workout
    updateWorkout(_id: Int!, update: String!): Workout
  }
`;

module.exports = typeDefs;
