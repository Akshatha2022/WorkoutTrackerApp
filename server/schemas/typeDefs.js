const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    email: String
    password: String
    username: String
    first_name: String
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
    addUser(username: String!, email: String!, password: String!, first_name: String!): Auth
    login(email: String!, password: String!): Auth

    createWorkout(title: String!, time: Int, reps: Int, distance: Int): Workout
    updateWorkout(_id: String!, title: String, time: Int, reps: Int, distance: Int): Workout
    deleteWorkout(_id: String!): Workout
  }
`;

module.exports = typeDefs;
