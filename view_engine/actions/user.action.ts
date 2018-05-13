import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { alertActions } from './alerts.action';
import { createBrowserHistory } from 'history';

export const userActions = {
    signup
};

// function login(username, password) {
//     return dispatch => {
//         dispatch(request({ username }));

//         userService.login(username, password)
//             .then(
//                 user => { 
//                     dispatch(success(user));
//                     createBrowserHistory().push('/');
//                 },
//                 error => {
//                     dispatch(failure(error));
//                     dispatch(alertActions.error(error));
//                 }
//             );
//     };

//     function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
//     function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
// }
function signup(name,password,email){
    console.log(name);
    userService.signup(name, password, email)
            .then(
                user => { 
                    // dispatch(success(user));
                    createBrowserHistory().push('/');
                },
                error => {
                    // dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                    alert('error occured');
                }
            );
    return true;
}
// function logout() {
//     userService.logout();
//     return { type: userConstants.LOGOUT };
// }

// function getAll() {
//     return dispatch => {
//         dispatch(request());

//         userService.getAll()
//             .then(
//                 users => dispatch(success(users)),
//                 error => dispatch(failure(error))
//             );
//     };

//     function request() { return { type: userConstants.GETALL_REQUEST } }
//     function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
// }