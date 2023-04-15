import React from 'react';
import Workouts from './AddWorkout';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const RecentActivity = () => {

    const { loading, data } = useQuery(QUERY_USER);
    const workouts = data?.user.workouts || [];
    console.log(workouts);

    return (
        <>
        {
            workouts.map(({ title, time, reps, distance }) => (
                <div>
                    <h2>{title}</h2>
                    <li>{time}</li>
                    <li>{reps}</li>
                    <li>{distance}</li>
                </div>
            ))
        }
        </>
        );
}
export default RecentActivity;