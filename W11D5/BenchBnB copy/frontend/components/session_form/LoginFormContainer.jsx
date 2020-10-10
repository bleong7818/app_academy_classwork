import {connect} from 'react-redux';
import SessionForm from './SessionForm';
import {login} from '../../actions/session_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "login",
        session: state.session.id,
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