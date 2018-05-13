"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
//refer to loginpage
var Signup = /** @class */ (function (_super) {
    __extends(Signup, _super);
    function Signup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: '',
            password: '',
            confirm: '',
            email: '',
            background: "#cc3a26",
            disabled: false
        };
        return _this;
    }
    Signup.prototype.delay_onKeyUp = function (e, target) {
        var value = e.target.value;
        var update_string = value;
        if (update_string.includes("script")) {
            alert("");
            this.setState({ disabled: true, background: "grey" });
        }
        else {
            if (target === 'confirm' && update_string !== this.state.password) {
                this.setState({ disabled: true, background: "grey" });
            }
            else if (target === 'confirm' && update_string === this.state.password) {
                this.setState({ disabled: false, background: "#cc3a26" });
            }
            else {
                var new_obj = {};
                new_obj[target] = update_string;
                this.setState(new_obj);
            }
        }
        // setTimeout(() => console.log(JSON.stringify(this.state[target])), 0);
    };
    Signup.prototype.on_submit = function (e) {
        e.preventDefault();
        //construct email regex
        console.log(this.state.email);
        var regex1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex1.test(this.state.email)) {
            console.log('submit');
            var info = {};
            info['user'] = this.state.user;
            info['email'] = this.state.email;
            info['password'] = this.state.password;
            this.props.handleSubmit('signup', info);
        }
        else {
            alert('wrong email format');
        }
    };
    Signup.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "modal fade", id: "mySignup", tabIndex: -1, role: "dialog", "aria-labelledby": "myModalLabel" },
            React.createElement("div", { className: "modal-dialog", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header modal-background" },
                        React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                            React.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                        React.createElement("h4", { className: "modal-title", id: "myModalLabel" }, "Welcome to Parser!"),
                        React.createElement("input", { type: "name", name: "user-name", placeholder: "Name", onKeyUp: function (e) { _this.delay_onKeyUp(e, "name"); } }),
                        React.createElement("br", null),
                        React.createElement("input", { type: "email", name: "user-email", placeholder: "Email: XXX@XXX.com", onKeyUp: function (e) { _this.delay_onKeyUp(e, "email"); } }),
                        React.createElement("br", null),
                        React.createElement("input", { type: "password", name: "user-password", placeholder: "Password", onKeyUp: function (e) { _this.delay_onKeyUp(e, "password"); } }),
                        React.createElement("br", null),
                        React.createElement("input", { type: "password", name: "user-confirm", placeholder: "Confirm Password", onKeyUp: function (e) { setTimeout(_this.delay_onKeyUp(e, "confirm"), 5000); } }),
                        React.createElement("br", null),
                        React.createElement("button", { type: "button", className: "btn-login", "data-dismiss": "modal", disabled: this.state.disabled, style: { backgroundColor: this.state.background }, onClick: function (e) {
                                _this.on_submit(e);
                            } },
                            React.createElement("span", null, "Sign up")))))));
    };
    return Signup;
}(React.Component));
exports.Signup = Signup;
//# sourceMappingURL=PresentationalSignup.js.map