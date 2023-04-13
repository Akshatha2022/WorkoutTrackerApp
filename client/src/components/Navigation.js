import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Nav({ currentPage, handlePageChange }) {
    const [loggedIn, changeLoggin] = useState("false");
    if (currentPage = 'AddWorkout') {
        changeLoggin("true");
    }
    if (loggedIn === "true") {
        return (
            <ButtonGroup>
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
            </ButtonGroup>
        )
    } else {
        return (
            <div>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">

                    <Button>
                        <a
                            href='#Login'
                            onClick={() => handlePageChange("Login")}
                            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
                            Login
                        </a>
                    </Button>
                    <Button>
                        <a
                            href='#SignUp'
                            onClick={() => handlePageChange("SignUp")}
                            className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}>
                            Sign Up
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
                </ButtonGroup>
            </div>
        );
    }
}



