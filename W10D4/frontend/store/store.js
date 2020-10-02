import { createStore } from 'redux';
import rootReducer from '../reducers/todos_reducer';

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer, preLoadedState)
}

export default configureStore;