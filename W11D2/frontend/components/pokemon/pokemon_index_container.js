import { connect } from 'react-redux'
import { requestAllPokemon } from '../../actions/pokemon_actions'
import { selectAllPokemon } from '../../reducers/selectors'

const mapStateToProps = state => ({
    pokemon: selectAllPokemon(state);

});

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () = dispatch(re) // dispatch requestAllPokemon action.
});




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonIndex);