import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id

      email
      firstName
      username
      workouts {
        _id
        title
        time
        reps
        distance
      }
    }
  }
`;

export const QUERY_WORKOUTS = gql`
  query workouts {
    workout {
      _id
      title
      time
      reps
      distance
    }
  }
`;

export const QUERY_ONE_WORKOUT = gql`
  query workout {
    workout(_id: $id) {
    _id
    distance
    reps
    time
    title
  }
  }
`;



