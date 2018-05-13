"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_header_1 = require("../helpers/auth-header");
var axios_1 = require("axios");
exports.userService = {
    login: login,
    logout: logout,
    signup: signup,
    getAll: getAll
};
function login(username, password) {
    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password })
    };
    //hit the /users/authenticate enpoint in backend
    return fetch('/users/authenticate', requestOptions).then(function (response) {
        if (!response.ok) {
            // return Promise.reject(response.statusText);
            return response.statusText;
        }
        return response.json();
    }).then(function (res) {
        //console.log(JSON.stringify(res.data.result));
        if (res.data.id && res.data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(res.data.id));
        }
    });
}
function signup(name, password, email) {
    var info = {};
    info['user'] = this.state.user;
    info['email'] = this.state.email;
    info['password'] = this.state.password;
    return axios_1.default.post('/users/authenticate', info, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        //console.log(JSON.stringify(res.data.result));
        if (res.data.id && res.data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(res.data.id));
        }
    }).catch(function (err) {
        alert(err.body);
        return false;
    });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
function getAll() {
    var requestOptions = {
        method: 'GET',
        headers: auth_header_1.authHeader()
    };
    return fetch('/users', requestOptions).then(handleResponse);
}
function handleResponse(response) {
    if (!response.ok) {
        // return Promise.reject(response.statusText);
        return response.statusText;
    }
    return response.json();
}
//# sourceMappingURL=user.services.js.map