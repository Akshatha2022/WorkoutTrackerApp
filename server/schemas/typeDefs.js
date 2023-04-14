const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    email: String
    password: String
    username: String
    firstName: String
    workouts: [Workout]!
  }

  type Workout {
    _id: ID!
    title: String!
    time: Int
    reps: Int
    distance: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User

    workouts: [Workout]
    workout(_id: ID!): Workout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String!): Auth
    login(email: String!, password: String!): Auth

    createWorkout(title: String!, time: Int, reps: Int, distance: Int): Workout
    updateWorkout(_id: String!, title: String, time: Int, reps: Int, distance: Int): Workout
    deleteWorkout(_id: String!): Workout
  }
`;

module.exports = typeDefs;
