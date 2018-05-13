import * as React from 'react';
import { Category } from './PresentationalCategory';
import { IMG } from '../main';
import { MenuItem } from './PresentationalItem'

export class ItemContainer extends React.Component<{ imgs: IMG[] },any> {
    constructor(props: { imgs: IMG[] }) {
        super(props);
    }
    
render() {
    return (
        <div id="items">
            <div id="fitnessMeal" className="container" style={{ display: 'block' }}>
                {this.props.imgs.map((i:IMG, id:number) => {
                    return <MenuItem img={i} key={id} />
                })}
            </div>
        </div>
    )
}
}
