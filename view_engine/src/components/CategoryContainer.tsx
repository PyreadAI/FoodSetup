import * as React from 'react';
import {Category} from './PresentationalCategory';

export class CategoryContainer extends React.Component<{ids:string[]}, any> {
    constructor(props: {ids:string[]}) {
        super(props);
    }

    render() {
        return (
            <div id="category">
                <div className="container">
                    {this.props.ids.map((i:string, key:number) => {
                        return <Category id={i} key={key} />  
                    })}
                </div>
            </div>
        )
    }
}
