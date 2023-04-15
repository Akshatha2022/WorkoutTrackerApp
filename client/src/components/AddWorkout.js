import React, { useState } from 'react';

function Trainerworkout() {
  const [workout, setWorkout] = useState({
    exercise: '',
    sets: '',
    reps: '',
    description: '',
  });

  const [workoutData, setWorkoutData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkoutData([...workoutData, workout]);
    setWorkout('');
  };

  const { exercise, sets, reps, description } = workout;

  return (
    <>
      <h3>Add a Workout</h3>
        <form class="table table-bordered" onSubmit={handleSubmit}>
            <label>
            Exercise:
            <input
                type="text"
                name="exercise"
                placeholder="Exercice"
                value={exercise || ''}
                onChange={handleChange}
            />
            </label>
            <br></br>
            <br></br>
            <label>
            Set:
            <input
                type="text"
                name="sets"
                placeholder="Sets"
                value={sets || ''}
                onChange={handleChange}
            />
            </label>
            <br></br>
            <br></br>
            <label>
            Reps:
            <input
                type="text"
                name="reps"
                placeholder="Reps"
                value={reps || ''}
                onChange={handleChange}
            />
            </label>
            <br></br>
            <br></br>
            <label>
            Miles:
            <input
                type="text"
                name="description"
                placeholder="Miles"
                value={description || ''}
                onChange={handleChange}
            />
            </label>
            <br></br>
            <br></br>

            <button type="submit">Add Workout</button>
        </form>
      <div className="table table-bordered">
        <table className="exerciseTable table-bordered">
          <thead>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Set</th>
              <th scope="col">Reps</th>
              <th scope="col">Miles</th>
            </tr>
          </thead>
          <tbody>
            {workoutData &&
              workoutData.map((d, index) => (
                <tr key={index}>
                  <td>{d.exercise}</td>
                  <td>{d.sets}</td>
                  <td>{d.reps}</td>
                  <td>{d.description}</td>
                </tr>
                
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Trainerworkout