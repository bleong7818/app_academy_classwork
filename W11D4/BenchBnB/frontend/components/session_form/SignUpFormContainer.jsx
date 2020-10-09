import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "signup"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);