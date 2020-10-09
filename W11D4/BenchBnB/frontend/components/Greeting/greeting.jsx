import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const notLoggedIn = () => (
        <nav className = "login/signup">
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
        </nav>
    );
    const loggedIn = () => (
        <div className="greeting">
            <h2>Salutations, {currentUser.username}</h2>
            <button onClick={logout}>Log out</button>
        </div>
    );

    return currentUser ? loggedIn() : notLoggedIn();
}

export default Greeting;