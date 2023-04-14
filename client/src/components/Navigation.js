import React from 'react';
import { Button } from 'bootstrap';
import { useState } from 'react';



function Nav({ currentPage, handlePageChange }) {
    const [loggedIn, changeLoggin] = useState("false");
    if (currentPage !== 'Login' || currentPage !== 'SignUp') {
        changeLoggin("true");
    }
    if (loggedIn === "true") {
        return (
            <div>
                <Button type="addWorkout" className="outline-secondary">
                    <a
                        href='#Dash'
                        onClick={() => handlePageChange("Dash")}
                        className={currentPage === 'Dash' ? 'nav-link active' : 'nav-link'}>
                        Dashboard
                    </a>
                </Button>
                <Button>
                    <a
                        href='#AddWorkout'
                        onClick={() => handlePageChange("AddWorkout")}
                        className={currentPage === 'AddWorkout' ? 'nav-link active' : 'nav-link'}>
                        Add Workout
                    </a>
                </Button>
        
                <Button>
                    <a
                        href='#RecentActivity'
                        onClick={() => handlePageChange("RecentActivity")}
                        className={currentPage === 'RecentActivity' ? 'nav-link active' : 'nav-link'}>
                        Recent Activity
                    </a>
                </Button>
            </div>
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
                            href='#Dash'
                            onClick={() => handlePageChange("Dash")}
                            className={currentPage === 'Dash' ? 'nav-link active' : 'nav-link'}>
                            Dashboard
                        </a>
                    </Button>
                    <Button>
                        <a
                            href='#AddWorkout'
                            onClick={() => handlePageChange("AddWorkout")}
                            className={currentPage === 'AddWorkout' ? 'nav-link active' : 'nav-link'}>
                            Add Workout
                        </a>
                    </Button>

                    <Button>
                        <a
                            href='#RecentActivity'
                            onClick={() => handlePageChange("RecentActivity")}
                            className={currentPage === 'RecentActivity' ? 'nav-link active' : 'nav-link'}>
                            Recent Activity
                        </a>
                    </Button>
            </div>
        );
    }
}
export default Nav;









