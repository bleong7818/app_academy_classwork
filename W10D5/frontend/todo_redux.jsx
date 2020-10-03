//test
import {receiveTodo, receiveTodos} from "./actions/todo_actions"
//test
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';
import { getAllTodos } from './reducers/selectors'



document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    ReactDOM.render(
        <Root store={store}/>,
        document.getElementById("root")
    )
    //test
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.getAllTodos = getAllTodos;
    //test
})