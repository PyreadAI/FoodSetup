import * as React from 'react';
import { IMG } from '../main';


export class MenuItem extends React.Component<{ img: IMG }, { count: number }> {
    constructor(props: { img: IMG }) {
        super(props);
        this.state = {
            count: 0
        }
    }
    protected minusFitnessButton() {
        if (this.state.count > 0){
            this.setState((prevState) => {
                let num:number = prevState.count;
                num--;
                return {count: num}
            });
        }else{
            alert("Number not valid");
        }  
    };
    protected plusFitnessButton() {
        if (this.state.count < 31) {
            this.setState((prevState) => {
                let num:number = prevState.count;
                num++;
                return {count: num}
            });
        } else {
            alert("Number exceed limit");
        }
    }
    render() {
        let url:string ="url('/" + this.props.img.src + "') no-reapeat;";
        return (
           
            <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12">
                    <div id="fitness1" className="fitnessPic1 fitnessText1" style={{ background: url}}>
                        <p id="fitnessTitle1">{this.props.img.title}</p>
                        <p id="fitnessParagraph1">
                            {this.props.img.recipe}
                        </p>
                        <p id="fitnessPrice1">{this.props.img.price+'CAD'}</p>
                        <div id="fitnessCart">
                            <div className="Amount">Amount</div>
                            <div id="minusFitnessButton1" onClick={(e:any) => {this.minusFitnessButton()}}><div className="minusMark">-</div></div>
                            <div id="numberFitnessDisplay1"><div id="fitnessDisplay1">{this.state.count}</div></div>
                            <div id="plusFitnessButton1" onClick={(e:any) => {this.plusFitnessButton()}}><div className="addMark">+</div></div>
                            <div id="cartFitnessButton1"><div className="cartDisplay">add to cart</div></div>
                        </div>
                    </div>
                </div>
        )
    }
}
