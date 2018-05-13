import * as React from 'react';





export class Category extends React.Component<{ id: string }, any> {
    constructor(props: { id: string }) {
        super(props);
    }
    hideDiv() {
        document.getElementById('fitnessMeal').style.display = "none";
    }
    render() {
        return (
            <div className="col-md-2 col-sm-4 col-xs-6 col-xxs-12 clink" onClick={(e: any) => {
                this.hideDiv();
            }}>
                <div id={this.props.id}>{this.props.id}</div>
            </div>
        )
    }
}
