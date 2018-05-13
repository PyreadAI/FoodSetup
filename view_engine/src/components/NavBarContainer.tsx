import * as React from 'react';
 
import { FormGroup, ControlLabel, FormControl, HelpBlock,Button} from 'react-bootstrap';
import {Logo} from './PresentationalLogo'
import {Buttons} from './ButtonsContainer'
import {Info} from '../main'



export class NavBar extends React.Component<any, any> {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (<div className="container">
        <Logo />
        <Buttons handleSubmit={this.props.handleSubmit} />
      </div>)
    }
}
