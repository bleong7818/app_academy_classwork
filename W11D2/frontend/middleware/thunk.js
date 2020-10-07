const thunk = ({dispatch, getState}) => banana => action => {
  if(typeof action === 'function') {
    return action(dispatch, getState);
  }
  return banana(action);
}

export default thunk;