import { gql } from '@apollo/client';

export const CREATE_WORKOUT = gql`
  mutation createWorkout($title: String!, $time: Int, $reps: Int!, distance: Int) {
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
  mutation updateWorkout($_id: String!, $update: String!) {
    updateWorkout(workout: $workout) {
      _id
      workout
    }
  }
`;

export const DELETE_WORKOUT = gql`
  mutation deleteWorkout($workout: String!) {
    deleteWorkout(workout: $workout) {
      _id
      workout
    }
  }
`;


