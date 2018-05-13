import * as React from 'react';
 
import { Logo } from './PresentationalLogo'
import { Buttons } from './ButtonsContainer'



export class SlidingNavBar extends React.Component<any, any> {
    constructor(props: { login: any }) {
        super(props);
        
    }
    
    render() {
        return (<div id="top-header">
        <div className="container">
          <Logo />
          <Buttons />
        </div>
      </div>)
    }
}
