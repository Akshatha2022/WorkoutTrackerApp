import { gql } from '@apollo/client';

export const CREATE_WORKOUT = gql`
  mutation createWorkout($workout: String!) {
    createWorkout(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;


