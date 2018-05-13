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
var Buttons = /** @class */ (function (_super) {
    __extends(Buttons, _super);
    function Buttons(props) {
        return _super.call(this, props) || this;
    }
    Buttons.prototype.render = function () {
        return (React.createElement("div", { className: "buttons" },
            React.createElement(react_router_dom_1.Link, { to: "/" },
                React.createElement("button", { className: "button1" }, "home")),
            React.createElement(react_router_dom_1.Link, { to: "/menu" },
                React.createElement("button", { className: "button1" },
                    React.createElement("a", { href: "menu.html" }, "menu"))),
            React.createElement("button", { className: "button1" }, "membership"),
            React.createElement("button", { className: "button1" }, "about us"),
            React.createElement("button", { type: "button2", id: "user-login", "data-toggle": "modal", "data-target": "#myModal" }, "log in | sign up"),
            React.createElement("div", { className: "modal fade", id: "myModal", tabIndex: -1, role: "dialog", "aria-labelledby": "myModalLabel" },
                React.createElement("div", { className: "modal-dialog", role: "document" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header modal-background" },
                            React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                                React.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                            React.createElement("h4", { className: "modal-title", id: "myModalLabel" }, "Welcome to Parser!"),
                            React.createElement("input", { type: "name", name: "user-name", placeholder: "Name" }),
                            React.createElement("br", null),
                            React.createElement("input", { type: "password", name: "user-password", placeholder: "Password" }),
                            React.createElement("br", null),
                            React.createElement("a", { href: "#", id: "reset" },
                                React.createElement("span", null, "forget password?")),
                            React.createElement("br", null),
                            React.createElement("button", { type: "button", className: "btn-login", "data-dismiss": "modal" },
                                React.createElement("span", null, "Log In")))))),
            React.createElement("img", { src: "images/cart.png", alt: "shopping cart", id: "cart-img" }),
            React.createElement("p", { id: "cart", className: "cart-text-original" },
                React.createElement("a", { href: "#" }, "cart"))));
    };
    return Buttons;
}(React.Component));
exports.Buttons = Buttons;
//# sourceMappingURL=ButtonsContainer.js.map