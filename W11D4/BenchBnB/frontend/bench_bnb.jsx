import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {login, signup, logout} from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // TESTING START
    window.getState = store.getState;
    window.signup = signup;
    window.logout = logout;
    window.login = login;
    window.dispatch = store.dispatch;
    // TESTING END

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});

let user1 = {name: "jd", email: "jd@aa.io", password: "password"}