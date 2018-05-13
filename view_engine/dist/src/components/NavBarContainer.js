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
var PresentationalLogo_1 = require("./PresentationalLogo");
var ButtonsContainer_1 = require("./ButtonsContainer");
var NavBar = /** @class */ (function (_super) {
    __extends(NavBar, _super);
    function NavBar(props) {
        return _super.call(this, props) || this;
    }
    NavBar.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement(PresentationalLogo_1.Logo, null),
            React.createElement(ButtonsContainer_1.Buttons, { handleSubmit: this.props.handleSubmit })));
    };
    return NavBar;
}(React.Component));
exports.NavBar = NavBar;
//# sourceMappingURL=NavBarContainer.js.map