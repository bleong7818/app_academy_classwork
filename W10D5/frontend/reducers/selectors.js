import React from 'react';
import ReactDOM from 'react-dom';


export const getAllTodos = ({todos}) => (
    Object.keys(todos).map(id => todos[id])
);

