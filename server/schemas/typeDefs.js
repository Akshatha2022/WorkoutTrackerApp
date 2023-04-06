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
    createWorkout(): Workout
    updateWorkout(_id: String!, update: Int!): Workout
  }
`;

module.exports = typeDefs;
