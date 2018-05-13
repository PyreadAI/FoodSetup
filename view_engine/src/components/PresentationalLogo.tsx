import * as React from 'react';
 
import { FormGroup, ControlLabel, FormControl, HelpBlock,Button} from 'react-bootstrap';
import {Info} from '../main'



export class Logo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        
    }
    
    render() {
        return (<div className="pull-left" id="logo">
          <p id="logo-text">Parser</p>
          <p id="logo-slogan">we redefine takeout.</p>
        </div>)
        
    }
}
