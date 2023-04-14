import React from 'react';
import { Button } from 'bootstrap';
import { useState } from 'react';



export default function Nav({ currentPage, handlePageChange }) {
    const [loggedIn, changeLoggin] = useState("false");
    if (currentPage = 'AddWorkout') {
        changeLoggin("true");
    }
    if (loggedIn === "true") {
        return (
                <Button type="addWorkout" className="outline-secondary">
                    <a
                        href='#AddWorkout'
                        onClick={() => handlePageChange("AddWorkout")}
                        className={currentPage === 'AddWorkout' ? 'nav-link active' : 'nav-link'}>
                        Add Workout
                    </a>
                </Button>
        )
    } else {
        return (
            <div>
                    <Button type="Login" className="outline-secondary">
                        <a
                            href='#Login'
                            onClick={() => handlePageChange("Login")}
                            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
                            Login
                        </a>
                    </Button>
                    <Button type="signUp" className="outline-secondary">
                        <a
                            href='#SignUp'
                            onClick={() => handlePageChange("SignUp")}
                            className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}>
                            Sign Up
                        </a>
                    </Button>
                    <Button type="addWorkout" className="outline-secondary">
                        <a
                            href='#AddWorkout'
                            onClick={() => handlePageChange("AddWorkout")}
                            className={currentPage === 'AddWorkout' ? 'nav-link active' : 'nav-link'}>
                            Add Workout
                        </a>
                    </Button>
            </div>
        );
    }
}



