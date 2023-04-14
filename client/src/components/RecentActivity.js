import React from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const RecentActivity = () => {

    const { loading, error, data } = useQuery(QUERY_USER);
    const getUserWorkouts = async (event) => {
        event.preventDefault();
       const workouts = data?.user.workouts || [];
        return workouts;
    }
    const workouts = getUserWorkouts();


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