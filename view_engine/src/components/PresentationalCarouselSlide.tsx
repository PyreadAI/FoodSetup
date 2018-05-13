import * as React from 'react';

import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Logo } from './PresentationalLogo'
import { Buttons } from './ButtonsContainer'
import { Info } from '../main'



export class Slide extends React.Component<{src:string,description:string,title:string}, any> {
    constructor(props: {src:string,description:string,title:string}) {
        super(props);
    }

    render() {
        return (<div className="main-slide">
            <div className="description pull-left">
                <p>{this.props.description}</p>
            </div>
            <img src={this.props.src} className="fade-in" alt={this.props.title} />
                <div className="title slide-in">{this.props.title}</div>
            </div>)
    }
}
