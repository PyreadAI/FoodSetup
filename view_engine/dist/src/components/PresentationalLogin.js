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
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: '',
            pw: ''
        };
        return _this;
    }
    Login.prototype.render = function () {
        return (React.createElement("div", { className: "modal fade", id: "myLogin", tabIndex: -1, role: "dialog", "aria-labelledby": "myModalLabel" },
            React.createElement("div", { className: "modal-dialog", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header modal-background" },
                        React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                            React.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                        React.createElement("h4", { className: "modal-title", id: "myModalLabel" }, "Not Welcome to Parser!"),
                        React.createElement("input", { type: "name", name: "user-name", placeholder: "Name" }),
                        React.createElement("br", null),
                        React.createElement("input", { type: "password", name: "user-password", placeholder: "Password" }),
                        React.createElement("br", null),
                        React.createElement("a", { href: "#", id: "reset" },
                            React.createElement("span", null, "forget password?")),
                        React.createElement("br", null),
                        React.createElement("button", { type: "button", className: "btn-login", "data-dismiss": "modal" },
                            React.createElement("span", null, "Log In")))))));
    };
    return Login;
}(React.Component));
exports.Login = Login;
//# sourceMappingURL=PresentationalLogin.js.map