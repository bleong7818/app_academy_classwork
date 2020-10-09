import {connect} from 'react-redux';
import SessionForm from './SessionForm';
import {login} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "login"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);