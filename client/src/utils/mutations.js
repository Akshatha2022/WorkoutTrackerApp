import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        firstName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $firstName: String!, $username: String!,) {
    addUser(username: $username, email: $email, password: $password, firstName: $firstName) {
      token
      user {
        _id
        username
        email
        firstName
      }
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation createWorkout($title: String!, $time: Int, $reps: Int, $distance: Int) {
    createWorkout(title: $title, time: $time, reps: $reps, distance: $distance) {
      _id
      title
      time
      reps
      distance
    }
  }
`;

export const UPDATE_WORKOUT = gql`
  mutation updateWorkout($_id: String!, $title: String, $time: Int, $reps: Int, $distance: Int) {
    updateWorkout(_id: $_id, title: $title, time: $time, reps: $reps, distance: $distance) {
      _id
      title
      time
      reps
      distance
    }
  }
`;

export const DELETE_WORKOUT = gql`
  mutation deleteWorkout($_id: String!) {
    deleteWorkout(_id: $_id) {
      _id
      title
    }
  }
`;


