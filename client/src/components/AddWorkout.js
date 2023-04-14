import React from 'react';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_WORKOUT } from '../utils/mutations';

const AddWorkout = () => {

    const [newTitle, setNewTitle] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newReps, setNewReps] = useState("");
    const [newDistance, setNewDistance] = useState("");

    const [createWorkout, { data, loading, error, reset }] = useMutation(CREATE_WORKOUT);

    const addWorkoutInput = async (event) => {
        event.preventDefault();
        try {
            const { data } = await createWorkout({
                variables: {
                    title: newTitle,
                    time: newTime,
                    reps: newReps,
                    distance: newDistance
                },
            });
            console.log(data);
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className=
            "flex-row justify-center justify-space-between-md align-center">
            <h1>Create New Workout</h1>
            <div className="col-12 col-lg-9">
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
            </div>
            <div className="col-12 col-lg-9">
                <input
                    type="text"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                />
            </div>
            <div className="col-12 col-lg-9">
                <input
                    type="text"
                    value={newReps}
                    onChange={(e) => setNewReps(e.target.value)}
                />
            </div>
            <div className="col-12 col-lg-9">
                <input
                    type="text"
                    value={newDistance}
                    onChange={(e) => setNewDistance(e.target.value)}
                />
            </div>
            <div className="col-12 col-lg-3">

                <button
                    onClick={addWorkoutInput}
                    className="btn btn-primary btn-block py-3">
                    Add Workout</button>
            </div>

        </div>
    );
};

export default AddWorkout;