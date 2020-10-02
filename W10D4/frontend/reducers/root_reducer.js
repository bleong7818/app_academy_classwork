import { combineReducers } from 'redux';
import todoReducer from './todos_reducer'

const rootReducer = combinedReducers({
    tasks: todoReducer
})

export default rootReducer