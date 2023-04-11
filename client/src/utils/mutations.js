import { gql } from '@apollo/client';

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


