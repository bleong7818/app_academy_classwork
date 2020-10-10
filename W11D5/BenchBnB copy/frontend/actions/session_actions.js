import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receive_current_user = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logout_current_user = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receive_errors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then(passedUser => dispatch(receive_current_user(passedUser), 
        (errors => dispatch(receive_errors(errors.responseJSON))))
            
    );
};

export const login = user => dispatch => {
    return APIUtil.login(user)
        .then(passedUser => dispatch(receive_current_user(passedUser),
            (errors => dispatch(receive_errors(errors.responseJSON))))
    );    
};

export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(user => dispatch(logout_current_user()));
};
