import React from "react";
import ReactDOM from "react-dom";
import { postUser, postSession, deleteSession } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
    window.postUser = postUser;
    window.postSession = postSession;
    window.deleteSession = deleteSession;
});

let user1 = {user: {name: "jd", email: "jd@aa.io", password: "password"}}