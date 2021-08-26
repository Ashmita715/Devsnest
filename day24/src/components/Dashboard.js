import React,{useContext} from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';
import CardC from '../card/CardC';
import Context from '../Context/AuthContext';


function Dashboard() {
    const logger = useContext(Context)
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Route>
                {
                    logger.loggedIn?"Welcome to Dashboard":<Redirect to="/" />
                }
            </Route>
            <CardC />
        </div>
    );
}

export default Dashboard;