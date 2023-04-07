import { gql } from '@apollo/client';

export const QUERY_WORKOUTS = gql`
  query getWorkout {
    workout {
      _id
      title
      time
      reps
      distance
    }
  }
`;



