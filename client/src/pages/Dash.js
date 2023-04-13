import React, { useState } from 'react';
import { render } from "react-dom";
import Calendar from 'react-calendar';
import Nav from '../components/Navigation';
import RecentActivity from '../components/RecentActivity';
import Login from './SignIn';
import SignUp from './SignUp';
import AddWorkout from '../components/AddWorkout';



const ReactCalendar = () => {
    const [date, setDate] = useState(new Date())

    const onChange = date => {
        setDate(date)
    }

    const [currentPage, setCurrentPage] = useState('Login');
    const renderPage = () => {
        if (currentPage === 'Login') {
            return <Login />;
        }
        if (currentPage === 'SignUp') {
            return <SignUp />;
        }
        if (currentPage === 'AddWorkout') {
            return <AddWorkout />;
        }
        return <Resume />;
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (<div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <Calendar onChange={onChange} value={date} />
        <AddWorkout />
        <RecentActivity />
    </div>
    )
};

render(<ReactCalendar />, document.querySelector("#root"));