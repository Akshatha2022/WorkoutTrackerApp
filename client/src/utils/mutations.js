import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        first_name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $first_name: String!, $username: String!,) {
    addUser(username: $username, email: $email, password: $password, first_name: $first_name) {
      token
      user {
        _id
        username
        email
        first_name
      }
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation createWorkout($title: String!, $time: Int, $reps: Int, distance: Int) {
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
  mutation updateWorkout(id: String!, $distance: Int, $reps: Int, $time: Int, $title: String) {
  updateWorkout(_id: $id, distance: $distance, reps: $reps, time: $time, title: $title) {
    _id
    distance
    reps
    time
    title
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


