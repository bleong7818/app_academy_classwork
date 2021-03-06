import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ( { component: Component, path, loggedIn, exact } ) => {
    return <Route path={path} exact={exact} render={() => {
        if (!loggedIn) {
            return <Component {...props} />
        } else {
            return <Redirect to="/" />
        }
    }} 
    />
};