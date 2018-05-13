import * as React from 'react';

import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Logo } from './PresentationalLogo'
import { Buttons } from './ButtonsContainer'
import { Info } from '../main'



export class Feature extends React.Component<{ src: string }, any> {
    constructor(props: { src: string }) {
        super(props);
    }

    render() {
        let background: string = "url('./" + this.props.src + "') no-repeat"
        return (<div>
            <div className="feature-picture col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-12" style={{ background: background,backgroundSize:'cover'}}>
            </div>
            <div className="feature-description col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-12"></div>
        </div>)
    }
}
