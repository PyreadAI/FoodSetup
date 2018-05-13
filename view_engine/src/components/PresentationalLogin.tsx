import * as React from 'react';
import { loggedin } from '../../constants/loggedin.constants'

//refer to loginpage

export class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: '',
            pw: ''
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
                                <input type="name" name="user-name" placeholder="Name" /><br />
                                <input type="password" name="user-password" placeholder="Password" /><br />
                                <a href="#" id="reset"><span>forget password?</span></a><br />
                                <button type="button" className="btn-login" data-dismiss="modal"><span>Log In</span></button>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}
