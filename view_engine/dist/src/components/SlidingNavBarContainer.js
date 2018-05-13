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
var SlidingNavBar = /** @class */ (function (_super) {
    __extends(SlidingNavBar, _super);
    function SlidingNavBar(props) {
        return _super.call(this, props) || this;
    }
    SlidingNavBar.prototype.render = function () {
        return (React.createElement("div", { id: "top-header" },
            React.createElement("div", { className: "container" },
                React.createElement(PresentationalLogo_1.Logo, null),
                React.createElement(ButtonsContainer_1.Buttons, null))));
    };
    return SlidingNavBar;
}(React.Component));
exports.SlidingNavBar = SlidingNavBar;
//# sourceMappingURL=SlidingNavBarContainer.js.map