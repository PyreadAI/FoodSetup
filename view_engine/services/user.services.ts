import { authHeader } from '../helpers/auth-header';
import axios from 'axios';
export const userService = {
    login,
    logout,
    signup,
    getAll
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    //hit the /users/authenticate enpoint in backend

    return fetch('/users/authenticate', requestOptions).then(response => {
            if (!response.ok) {
                // return Promise.reject(response.statusText);
                return response.statusText;
            }

            return response.json();
        }).then((res: any) => {
            //console.log(JSON.stringify(res.data.result));
            if (res.data.id && res.data.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(res.data.id));
            }
        });
}
function signup(name, password, email) {
    let info: any = {};
    info['user'] = this.state.user;
    info['email'] = this.state.email;
    info['password'] = this.state.password;
    return axios.post('/users/authenticate', info, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res: any) => {
        //console.log(JSON.stringify(res.data.result));
        if (res.data.id && res.data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(res.data.id));
        }
    }).catch((err: any) => {
        alert(err.body);
        return false;
    })
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
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