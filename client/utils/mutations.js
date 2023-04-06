import { gql } from '@apollo/client';

export const CREATE_WORKOUT = gql`
  mutation createWorkout($workout: String!) {
    createWorkout(workout: $workout) {
      _id
      workout
    }
  }
`;

export const UPDATE_WORKOUT = gql`
  mutation createWorkout($workout: String!) {
    createWorkout(workout: $workout) {
      _id
      workout
    }
  }
`;

export const DELETE_WORKOUT = gql`
  mutation deleteWorkout($workout: String!) {
    createWorkout(workout: $workout) {
      _id
      workout
    }
  }
`;


