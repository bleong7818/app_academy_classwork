//test
import {receiveTask, receiveTasks} from "./actions/todo_actions"
//test
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { receiveTask, receiveTasks } from './actions/todo_actions'


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    ReactDOM.render(
        <div>Something</div>,
        document.getElementById("root")
    )
    //test
    window.store = store;
    window.receiveTask = receiveTask;
    window.receiveTasks = receiveTasks;
    //test
})