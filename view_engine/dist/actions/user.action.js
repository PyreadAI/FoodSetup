"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_constants_1 = require("../constants/user.constants");
var user_services_1 = require("../services/user.services");
var alerts_action_1 = require("./alerts.action");
var history_1 = require("history");
exports.userActions = {
    login: login,
    signup: signup,
    logout: logout,
    getAll: getAll
};
function login(username, password) {
    return function (dispatch) {
        dispatch(request({ username: username }));
        user_services_1.userService.login(username, password)
            .then(function (user) {
            dispatch(success(user));
            history_1.createBrowserHistory().push('/');
        }, function (error) {
            dispatch(failure(error));
            dispatch(alerts_action_1.alertActions.error(error));
        });
    };
    function request(user) { return { type: user_constants_1.userConstants.LOGIN_REQUEST, user: user }; }
    function success(user) { return { type: user_constants_1.userConstants.LOGIN_SUCCESS, user: user }; }
    function failure(error) { return { type: user_constants_1.userConstants.LOGIN_FAILURE, error: error }; }
}
function signup(name, password, email) {
    console.log(name);
    user_services_1.userService.signup(name, password, email)
        .then(function (user) {
        // dispatch(success(user));
        history_1.createBrowserHistory().push('/');
    }, function (error) {
        // dispatch(failure(error));
        // dispatch(alertActions.error(error));
        alert('error occured');
    });
    return true;
}
function logout() {
    user_services_1.userService.logout();
    return { type: user_constants_1.userConstants.LOGOUT };
}
function getAll() {
    return function (dispatch) {
        dispatch(request());
        user_services_1.userService.getAll()
            .then(function (users) { return dispatch(success(users)); }, function (error) { return dispatch(failure(error)); });
    };
    function request() { return { type: user_constants_1.userConstants.GETALL_REQUEST }; }
    function success(users) { return { type: user_constants_1.userConstants.GETALL_SUCCESS, users: users }; }
    function failure(error) { return { type: user_constants_1.userConstants.GETALL_FAILURE, error: error }; }
}
//# sourceMappingURL=user.action.js.map