import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,

  session: {
    currentUser: 1
  },
  ui: {
    modalOpen: true
  },
  errors: {
    userErrors: [],
      sessionErrors: [],
        postErrors: []
  }
})

export default rootReducer;