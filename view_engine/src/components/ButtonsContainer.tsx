import * as React from 'react';
import {Info} from '../main'
import {Link} from 'react-router-dom';

import {loggedin} from '../../constants/loggedin.constants'
import { Signup } from './PresentationalSignup'
import { Login } from './PresentationalLogin'

export class Buttons extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        // let box:any = this.props.login.loggedin? <div>{"hello, "}</div>:<button type="button2" id="user-login" data-toggle="modal" data-target="#myModal">log in | sign up</button>
        
        return (<div className="buttons">
                    <Link to="/"><button className="button1">home</button></Link>
                    <Link to="/menu"><button className="button1"><a href="menu.html">menu</a></button></Link>
                    <button className="button1">membership</button>
                    <button className="button1">about us</button>
                    <button type="button2" id="user-login" data-toggle="modal" data-target="#myLogin">log in | </button>
                    <button type="button2" id="user-signup" data-toggle="modal" data-target="#mySignup">sign up</button>
                    <Signup handleSubmit={this.props.handleSubmit} />
                    <Login handleSubmit={this.props.handleSubmit} />
                    <img src="images/cart.png" alt="shopping cart" id="cart-img"></img>
                    <p id="cart" className="cart-text-original"><a href="#">cart</a></p>
                </div>)
        
    }
}
