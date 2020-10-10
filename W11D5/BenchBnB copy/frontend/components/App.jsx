import React from "react";
import { Route } from "react-router-dom";
import Greeting_container from "./Greeting/Greeting_container";
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignUpFormContainer from "./session_form/SignUpFormContainer";

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <Greeting_container />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;