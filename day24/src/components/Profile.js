import React, { useContext } from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';
import CardB from '../card/CardB';
import Context from '../Context/AuthContext';


function Profile() {
    const logger = useContext(Context)
    return (
        <div className="profile">
            <h1>Profile</h1>
            <Route>
                {
                    logger.loggedIn?"Picture Gallery":<Redirect to="/" />
                }
            </Route>
            <CardB />
        </div>
    );
}

export default Profile;