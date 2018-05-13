import * as React from 'react';
import { loggedin } from '../../constants/loggedin.constants'

//refer to loginpage

export class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    delay_onKeyUp(e: any, target: string) {
        const {value} = e.target;
        let update_string: any = value;
        if(update_string.includes("script")){
            alert("");
            this.setState({disabled:true,background:"grey"});
        }else{
            if (target === 'confirm' && update_string !== this.state.password) {
                this.setState({disabled:true,background:"grey"});
            }else if(target === 'confirm' && update_string === this.state.password){
                this.setState({disabled:false,background:"#cc3a26"});
            }else{
                let new_obj:any = {};
                new_obj[target] = update_string;
                this.setState(new_obj);
            }
        }
        
        
        // setTimeout(() => console.log(JSON.stringify(this.state[target])), 0);
    }
    on_submit(e:any){
        e.preventDefault();
        //construct email regex
        console.log(this.state.email)
        var regex1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex1.test(this.state.email)){
            console.log('submit');
            let info:any = {};
            info['email'] = this.state.email;
            info['password'] = this.state.password;
            this.props.handleSubmit('login', info);
        }else{
            alert('wrong email format');         
        }
    }
    render() {
        return (
                <div className="modal fade" id="myLogin" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document" >
                        <div className="modal-content">
                            <div className="modal-header modal-background">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title" id="myModalLabel">Not Welcome to Parser!</h4>
                                <input type="name" name="user-name" placeholder="Email" onKeyUp={(e) => { this.delay_onKeyUp(e, "email") }} /><br />
                                <input type="password" name="user-password" placeholder="Password" onKeyUp={(e) => { this.delay_onKeyUp(e, "password") }}  /><br />
                                <a href="#" id="reset"><span>forget password?</span></a><br />
                                <button type="button" className="btn-login" data-dismiss="modal" onClick={(e:any)=>{
                                    this.on_submit(e);
                                }}><span>Log In</span></button>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}
