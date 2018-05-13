import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock,Button} from 'react-bootstrap';
import { Info } from '../main';
import { IMG } from '../main';
import { Slide } from './PresentationalCarouselSlide';



export class Carousel extends React.Component<{imgs:IMG[]}, any> {
    constructor(props:{imgs: IMG[]}) {
        super(props);   
    }
    
    render() {
        return (<div id="specialCarousel" data-flickity='{ "wrapAround": true }'>
                    {this.props.imgs.map((i:IMG, id:number) => {
                       return <Slide src={i.src} title={i.title} description={i.description} key={id} />
                    })}
                </div>)
    }
}
