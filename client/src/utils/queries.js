import { gql } from '@apollo/client';

export const QUERY_WORKOUT = gql`
  query workout {
    tech {
      _id
      workout
    }
  }
`;

