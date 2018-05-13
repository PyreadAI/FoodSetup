import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { IMG } from '../main';
import { Feature } from './PresentationalFeature';



export class Features extends React.Component<{ imgs: IMG[] }, any> {
    constructor(props: { imgs: IMG[] }) {
        super(props);
    }

    render() {
        return (<div id="feature">
            {this.props.imgs.map((i: IMG, id: number) => {
                return <Feature src={i.src} key={id}/>
            })}
        </div>)
    }
}
