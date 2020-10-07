import { RECEIVE_ALL_POKEMON, REQUEST_ALL_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      let test = Object.keys(action.pokemon);
      test.forEach((pokemon_id)=>{
        newState[pokemon_id] = action.pokemon[pokemon_id];
      })
      return newState;
    default:
      return newState;
  }
}

export default pokemonReducer;