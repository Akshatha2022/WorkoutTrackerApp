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
        if(currentPage === 'RecentActivity'){
        return <RecentActivity/>;
        } 
        if (currentPage === 'Dash'){
            return (<div>
                
                <Calendar onChange={onChange} value={date} />
                <AddWorkout />
                <RecentActivity />
            </div>)
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (<div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage}
    </div>
    )
};

render(<ReactCalendar />, document.querySelector("#root"));

export default ReactCalendar