import * as React from 'react';
import { OrderButton } from "./components/PresentationalOrderButton";
import { NavBar } from "./components/NavBarContainer";
import { Carousel } from './components/CarouselContainer';
import { Features } from './components/FeaturesContainer';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
var atob = require('atob');


export class MainPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        // this.props.dispatch(userActions.logout());
        // localStorage.removeItem('user');
        this.state = {
            loggedin: ''
        }
    }
    private validateJWT(token) {
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = atob(payload);
            return JSON.parse(payload);
        } else {
            return null;
        }
    }
    componentWillMount() {
        let token: string = localStorage.getItem('user');
        if (token) {
            let obj: any = this.validateJWT(token);
            let checker = obj.exp > Date.now() / 1000;
            if (!checker) {
                localStorage.removeItem('user');
                console.log('token expired');
                createBrowserHistory().push('/');
            }
        }
    }
    private checkLocalStorage(): any {
        let token: string = localStorage.getItem('user');
        if (token) {
            let obj = this.validateJWT(token);
            if (obj) {
                return obj.name;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
    // componentDidMount(){
    //     let checker = this.checkLocalStorage();
    //     if(checker !== null){
    //         this.setState({loggedin:checker});
    //     }
    // }
    private usersignup(name, password, email) {
        let info: any = {};
        info['name'] = name;
        info['email'] = email;
        info['password'] = password;
        return axios.post('/usersignup', info, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res: any) => {
            console.log(JSON.stringify(res.data));
            if (res.data.user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log('enter usersignup')
                localStorage.setItem('user', JSON.stringify(res.data.user));
                console.log('enter signup');

                // createBrowserHistory().push('/login');
                this.setState({ loggedin: name })
            } else {
                alert("signup failed")
            }
        }).catch((err: any) => {
            alert('enter' + err.body);
            return err;
        })
    }
    private userlogin(email, password) {
        let info: any = {};
        info['email'] = email;
        info['password'] = password;
        return axios.post('/userlogin', info, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res: any) => {
            // console.log(JSON.stringify(res.data));
            if (res.data.user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log('enter userlogin')
                localStorage.setItem('user', JSON.stringify(res.data.user));

                createBrowserHistory().push('/login');
                this.setState({ loggedin: name });
                //alert('enter userlogin');
            } else {
                alert("login failed please check your password")
            }
        }).catch((err: any) => {
            alert('enter' + err.body);
            return err;
        })
    }
    private signup(name, password, email) {
        console.log(name);
        this.usersignup(name, password, email);
        return true;
    }
    private login(email, password) {
        this.userlogin(email, password);
        console.log(email);
    }
    private handleSubmit(action: string, info: any) {
        console.log(JSON.stringify(info))
        if (action === 'signup') {
            const { name, password, email } = info;
            if (email && name && password) {
                console.log('handle')
                this.signup(name, password, email);
            }
        } else if (action === 'login') {
            const { email, password } = info;
            if (email && password) {
                console.log('handle')
                this.login(email, password);
            }
            // alert('enter');
        } else {
            localStorage.removeItem('user');
            // createBrowserHistory().push('/');
            this.setState({loggedin:'logout'});
        }

    }
    render() {
        if (this.state.loggedin !== '') {
            console.log('redirect')
            console.log(this.props.pathname);
            const { from } = { from: { pathname: this.props.pathname } };
            // const { from } = { from: { pathname: "/" } };

            return <Redirect to={from} />;
        }
        console.log(this.props);
        return (<div id="mainPage">
            <NavBar handleSubmit={this.handleSubmit.bind(this)} />
            <OrderButton />
            <Carousel imgs={[
                { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad0', price: '', recipe: '' },
                { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad1', price: '', recipe: '' },
                { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad2', price: '', recipe: '' },
                { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad3', price: '', recipe: '' },
                { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad4', price: '', recipe: '' },
                { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad5', price: '', recipe: '' }
            ]} />
            <Features imgs={[
                { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad0', price: '', recipe: '' },
                { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad1', price: '', recipe: '' },
                { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad2', price: '', recipe: '' }
            ]} />
        </div>)
    }
}

