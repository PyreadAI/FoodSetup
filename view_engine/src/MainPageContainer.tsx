import * as React from 'react';
import { OrderButton } from "./components/PresentationalOrderButton";
import { NavBar } from "./components/NavBarContainer";
import { Carousel } from './components/CarouselContainer';
import { Features } from './components/FeaturesContainer';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import axios from 'axios';


export class MainPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        // this.props.dispatch(userActions.logout());
        // localStorage.removeItem('user');
        console.log(this.props.params);
    }
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
            if (res.data.id && res.data.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log('enter usersignup')
                localStorage.setItem('user', JSON.stringify(res.data.id));
                console.log('enter signup');
                createBrowserHistory().push('/signup');
            }
        }).catch((err: any) => {
            alert('enter' + err.body);
            return err;
        })
    }
    private signup(name,password,email){
        console.log(name);
        this.usersignup(name, password, email);
        return true;
    }
    private handleSubmit(action: string, info: any) {
        console.log(JSON.stringify(info))
        if (action === 'signup') {
            const { name, password,email } = info;
            if (email && name && password) {
                console.log('handle')
                this.signup(name, password, email);
            }
        } else {
            alert('enter');
        }

    }
    render() {
        return (<div id="mainPage">
            <NavBar handleSubmit={this.handleSubmit.bind(this)} />
            <OrderButton  />
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

