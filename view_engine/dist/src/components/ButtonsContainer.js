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
var react_router_dom_1 = require("react-router-dom");
var PresentationalSignup_1 = require("./PresentationalSignup");
var PresentationalLogin_1 = require("./PresentationalLogin");
var Buttons = /** @class */ (function (_super) {
    __extends(Buttons, _super);
    function Buttons(props) {
        return _super.call(this, props) || this;
    }
    Buttons.prototype.render = function () {
        // let box:any = this.props.login.loggedin? <div>{"hello, "}</div>:<button type="button2" id="user-login" data-toggle="modal" data-target="#myModal">log in | sign up</button>
        return (React.createElement("div", { className: "buttons" },
            React.createElement(react_router_dom_1.Link, { to: "/" },
                React.createElement("button", { className: "button1" }, "home")),
            React.createElement(react_router_dom_1.Link, { to: "/menu" },
                React.createElement("button", { className: "button1" },
                    React.createElement("a", { href: "menu.html" }, "menu"))),
            React.createElement("button", { className: "button1" }, "membership"),
            React.createElement("button", { className: "button1" }, "about us"),
            React.createElement("button", { type: "button2", id: "user-login", "data-toggle": "modal", "data-target": "#myLogin" }, "log in | "),
            React.createElement("button", { type: "button2", id: "user-signup", "data-toggle": "modal", "data-target": "#mySignup" }, "sign up"),
            React.createElement(PresentationalSignup_1.Signup, { handleSubmit: this.props.handleSubmit }),
            React.createElement(PresentationalLogin_1.Login, { handleSubmit: this.props.handleSubmit }),
            React.createElement("img", { src: "images/cart.png", alt: "shopping cart", id: "cart-img" }),
            React.createElement("p", { id: "cart", className: "cart-text-original" },
                React.createElement("a", { href: "#" }, "cart"))));
    };
    return Buttons;
}(React.Component));
exports.Buttons = Buttons;
//# sourceMappingURL=ButtonsContainer.js.map