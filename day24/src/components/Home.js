import React, { useContext, useState } from 'react';
import Context from '../Context/AuthContext';
import CardA from '../card/CardA';


function Home() {
    const logger = useContext(Context)
    const toggleLogin = () => {
        logger.toggleLogin()
    }
    return (
        <div className="home">
            <h1>Home</h1>
            <h3>Login to access Profile and Dashboard</h3>
            {
                logger.loading?"Loading....":
                logger.loggedIn?
                    <button className="log" onClick={logger.logout}>Logout</button>:
                    <button className="log" onClick={logger.login}>Login</button>
            }
            <CardA />
            
        </div>
    );
}

export default Home;