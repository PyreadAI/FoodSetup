import * as React from 'react';
 
import { Link } from "react-router-dom";
import {Logo} from './PresentationalLogo'
import {Buttons} from './ButtonsContainer'
import {Info} from '../main'



export class OrderButton extends React.Component<any, any> {
    constructor(props:any) {
        super(props);   
    }
    
    render() {
        return (<Link to="menu"><button type="button" className="btn orderbtn" data-loading-text="Loading..">
            <a>Order Now!</a>
      </button></Link>)
    }
}
