import React, { useContext } from 'react';
import CardD from '../card/CardD';
import Context from '../Context/AuthContext';


function About() {
    const logger = useContext(Context)
    return (
        <div className="about">
            <h1>About</h1>
            <div>{logger.loggedIn?"You are logged In":"You are logged out"}</div>
            <CardD />
        </div>
    );
}

export default About;
