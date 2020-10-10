import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup } from '../../actions/session_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "signup",
        session: state.session.id,
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