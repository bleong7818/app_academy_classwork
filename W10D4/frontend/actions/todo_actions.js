import React from 'react';
import ReactDOM from 'react-dom';
export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

// export const addTask = {
//     type: RECEIVE_TODO,
//     task: {
//         id: 1,
//         title: "",
//         body: "",
//         done: ""
//     }
// }

// export const addTasks = {
//   type: RECEIVE_TODOS,
//   task: {
//     id: 1,
//     title: "",
//     body: "",
//     done: "",
//   },
// };

export const receiveTask = (task) => {
  return {
    type: RECEIVE_TODO,
    task
  };
};

export const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TODOS,
    tasks
  };
};


