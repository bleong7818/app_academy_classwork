import {RECEIVE_TODO, RECEIVE_TODOS} from "../actions/todo_actions"

const todoReducer = (state = {}, action) => {
    Object.freeze(state);
    // const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODO: 
            return [...state, action.task]
        case RECEIVE_TODOS:
            return [...state, ...action.tasks]
        default:
            return state
    }
}

export default todoReducer;